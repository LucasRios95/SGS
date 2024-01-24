import { BankAccount } from "modules/BankAccount/infra/typeorm/entities/BankAccount";
import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";

import { inject, injectable } from "tsyringe";

@injectable()
class ListBankAccountUseCase {
    constructor(
        @inject("BankAccountsRepository")
        private bankAccountsRepository: IBankAccountsRepository
    ) {}

    async execute(): Promise<BankAccount[]> {
        const accountsList = await this.bankAccountsRepository.list();

        return accountsList;
    }
}

export { ListBankAccountUseCase }