import { BankAccount } from "modules/BankAccount/infra/typeorm/entities/BankAccount";
import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    account_number: string;
    digit: string;
    our_number: string;
    message: string;
    id_bank: string;
    id_company: string;
    created_at: string;
}

@injectable()
class CreateBankAccountUseCase {
    constructor(
        @inject("BankAccountsRepository")
        private bankAccountsRepository: IBankAccountsRepository
    ) { }

    async execute({
        account_number,
        digit,
        our_number,
        message,
        id_bank,
        id_company,
        created_at
    }: IRequest): Promise<BankAccount> {
        const accountAlreadyExists = await this.bankAccountsRepository.findByAccountNumber(account_number);

        if (accountAlreadyExists) {
            throw new Error("Account Already exists");
        }

        const bankAccount = await this.bankAccountsRepository.create({
            account_number,
            digit,
            our_number,
            message,
            id_bank,
            id_company,
            created_at
        });

        return bankAccount;
    }
}

export { CreateBankAccountUseCase };