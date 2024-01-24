import { Bank } from "modules/Banks/infra/typeorm/entities/Bank";
import { ICreateBankAccountDto } from "../dtos/ICreateBankAccountDTO";
import { BankAccount } from "../infra/typeorm/entities/BankAccount";

interface IBankAccountsRepository {
    create(data: ICreateBankAccountDto): Promise<BankAccount>;
    findByAccountNumber(account_number: string): Promise<BankAccount>;
    list(): Promise<BankAccount[]>;
    delete(account_number: string): Promise<void>;
}

export { IBankAccountsRepository };