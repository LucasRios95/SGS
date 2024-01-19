import { ICreateBankAccountDto } from "modules/BankAccount/dtos/ICreateBankAccountDTO";
import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";
import { BankAccount } from "../entities/BankAccount";
import { Repository, getRepository } from "typeorm";


class BankAccountsRepository implements IBankAccountsRepository{
    private repository: Repository<BankAccount>;

    constructor() {
        this.repository = getRepository(BankAccount);
    }

    async create({
     account_number,
     digit,
     our_number,
     message,
     id_bank,
     id_company,
     created_at   
    }: ICreateBankAccountDto): Promise<BankAccount> {
        const bankAccount = await this.repository.create({
            account_number,
            digit,
            our_number,
            message,
            id_bank,
            id_company,
            created_at,
        });

        this.repository.save(bankAccount);

        return bankAccount;
    }

    async findByAccountNumber(account_number: string): Promise<BankAccount> {
        const bankAccount = await this.repository.findOne({account_number});

        return bankAccount;

    }

    async list(): Promise<BankAccount[]> {
        const accountsList = await this.repository.find();

        return accountsList;
    }

    async delete(id: string): Promise<void> {
        const bankAccount = await this.repository.findOne({id});

        this.repository.delete(bankAccount.id);

    }
}

export { BankAccountsRepository };