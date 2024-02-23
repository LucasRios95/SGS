import { inject, injectable } from "tsyringe";

import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";
import { DeleteResult } from "typeorm";
import { AppError } from "shared/errors/AppError";

@injectable()
class DeleteBankAccountUseCase {
    constructor(
        @inject("BankAccountsRepository")
        private bankAccountsRepository: IBankAccountsRepository 
    ) {}

    async execute(account_number: string): Promise<Boolean> {
        const bankAccount = await this.bankAccountsRepository.findByAccountNumber(account_number);

        if(!bankAccount) {
            throw new AppError("Account does not exists");
        }

        const isDeleted = await this.bankAccountsRepository.deleteBankAccount(account_number);

        return isDeleted;

    }
}

export { DeleteBankAccountUseCase };