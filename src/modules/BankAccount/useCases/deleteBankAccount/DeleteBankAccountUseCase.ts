import { inject, injectable } from "tsyringe";

import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";




@injectable()
class DeleteBankAccountUseCase {
    constructor(
        @inject("BankAccountsRepository")
        private bankAccountsRepository: IBankAccountsRepository 
    ) {}

    async execute(account_number: string): Promise<void> {
        const bankAccount = this.bankAccountsRepository.findByAccountNumber(account_number);

        if(!bankAccount) {
            throw new Error("Account does not exists");
        }

        this.bankAccountsRepository.delete(account_number); 

    }
}

export { DeleteBankAccountUseCase };