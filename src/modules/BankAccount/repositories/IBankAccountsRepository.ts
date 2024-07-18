import { Bank } from "modules/Banks/infra/typeorm/entities/Bank";
import { ICreateBankAccountDto } from "../dtos/ICreateBankAccountDTO";
import { BankAccount } from "../infra/typeorm/entities/BankAccount";
import { IEditBankAccountDto } from "../dtos/IEditBankAccountDTO";

interface IBankAccountsRepository {
    create(data: ICreateBankAccountDto): Promise<BankAccount>;
    findByAccountNumber(account_number: string): Promise<BankAccount>;
    updateBalance(id_account: string, data: IEditBankAccountDto): Promise<BankAccount>;
    findById(id: string): Promise<BankAccount>;
    list(): Promise<BankAccount[]>;
    deleteBankAccount(account_number: string): Promise<Boolean>;
}

export { IBankAccountsRepository };