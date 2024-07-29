import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";
import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { FinancialTransaction } from "modules/FinancialTransaction/infra/typeorm/entities/FinancialTransaction";
import { IFinancialTransactionRepository } from "modules/FinancialTransaction/repositories/IFinancialTransactionRepository";

interface IRequest {
    id?: string;
    description: string;
    value: number;
    date: Date;
    payment_type: string;
    payment_method: string;
    id_account: string;
    id_financialPosting?: string;
    created_at: Date;
}

@injectable()
class CreateFinancialTransactionUseCase {
    constructor(
        @inject("FinancialTransactionRepository")
        private financialTransactionRepository: IFinancialTransactionRepository,

        @inject("FinancialPostingRepository")
        private financialPostingRepository: IFinancialPostingRepository,

        @inject("BankAccountsRepository")
        private bankAccountRepository: IBankAccountsRepository
    ) { }

    async execute({
        id,
        description,
        value,
        date,
        payment_type,
        payment_method,
        id_account,
        id_financialPosting,
        created_at
    }: IRequest): Promise<FinancialTransaction> {

        // FAZ A BUSCA DO LANÇAMENTO FINANCEIRO E DA CONTA BANCÁRIA
        const bankAccount = await this.bankAccountRepository.findById(id_account);
        const financialPosting = await this.financialPostingRepository.findById(id_financialPosting);

        // VALIDA SE A CONTA BANCÁRIA EXISTE E VERIFICA NO CASO DE UM SAQUE OU UMA TRANSFERÊNCIA SE O VALOR É MAIOR QUE O SALDO DA CONTA 
        if (!bankAccount) {
            throw new AppError("Bank Account does not exists");
        } else if (payment_type != 'deposit' && value > bankAccount.balance) {
            throw new AppError("Insufficient Founds");
        }

        if (value <= 0) {
            throw new AppError("Transaction value should be higher than 0");
        }

        // REALIZA A OPERAÇÃO 
        const financialTransaction = await this.financialTransactionRepository.create({
            id,
            description,
            value,
            date,
            payment_type,
            payment_method,
            id_account,
            id_financialPosting,
            created_at
        });

        // Realiza a baixa do valor da conta caso a mesma seja informado e exista no banco de dados
        if (financialTransaction.id_financialPosting != null) {
            if (!financialPosting) {
                throw new AppError("financial Posting does not exists");
            }

            if (financialTransaction.value > financialPosting.value) {
                throw new Error("Payment is Higher than invoice");
            } else {
                let updateValue = financialPosting.value - financialTransaction.value;

                if (updateValue == 0) {
                    await this.financialPostingRepository.edit(id_financialPosting, {
                        id: id_financialPosting,
                        value: updateValue,
                        posting_type: financialPosting.posting_type,
                        description: financialPosting.description,
                        discount: financialPosting.discount,
                        due_date: financialPosting.due_date,
                        fee: financialPosting.fee,
                        id_account: financialPosting.id_account,
                        id_category: financialPosting.id_category,
                        tax: financialPosting.tax,
                        payment_status: 'paid'
                    });
                }

                if (updateValue > 0) {
                    await this.financialPostingRepository.edit(id_financialPosting, {
                        id: id_financialPosting,
                        value: updateValue,
                        posting_type: financialPosting.posting_type,
                        description: financialPosting.description,
                        discount: financialPosting.discount,
                        due_date: financialPosting.due_date,
                        fee: financialPosting.fee,
                        id_account: financialPosting.id_account,
                        id_category: financialPosting.id_category,
                        tax: financialPosting.tax,
                        payment_status: financialPosting.payment_status
                    });
                }
            }
        }

        // ATUALIZA O VALOR DO SALDO NA CONTA BANCÁRIA
        let balance = bankAccount.balance;

        financialTransaction.payment_type != 'deposit'
            ? balance -= financialTransaction.value
            : balance += financialTransaction.value;

        // FUNÇÃO DE EDITAR CONTA BANCÁRIA PARA ATUALZIAR O SALDO
        await this.bankAccountRepository.updateBalance(financialTransaction.id_account, {
            id: financialTransaction.id_account,
            account_number: bankAccount.account_number,
            digit: bankAccount.digit,
            our_number: bankAccount.our_number,
            message: bankAccount.message,
            id_bank: bankAccount.id_bank,
            id_company: bankAccount.id_company,
            balance: balance
        });

        return financialTransaction;
    }
}

export { CreateFinancialTransactionUseCase };
