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
        id_financialPosting,
        created_at
    }: IRequest): Promise<FinancialTransaction> {
        const financialPosting = await this.financialPostingRepository.findById(id_financialPosting);
        const bankAccount = await this.bankAccountRepository.findById(financialPosting.id_account);

        if (!financialPosting) {
            throw new AppError("Posting does not exists");
        } else
            if (value > financialPosting.value) {
                throw new AppError("Payment is higher than financial Posting Account value");
            }

        const financialTransaction = await this.financialTransactionRepository.create({
            id,
            description,
            value,
            date,
            payment_type,
            payment_method,
            id_financialPosting,
            created_at
        });

        let updatedValue = financialPosting.value - financialTransaction.value;

        await this.financialPostingRepository.edit(id_financialPosting, {
            id: id_financialPosting,
            value: updatedValue
        });

        return financialTransaction;
    }
}

export { CreateFinancialTransactionUseCase };