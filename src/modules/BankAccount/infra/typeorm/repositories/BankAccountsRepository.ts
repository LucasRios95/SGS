import { ICreateBankAccountDto } from "modules/BankAccount/dtos/ICreateBankAccountDTO";
import { IBankAccountsRepository } from "modules/BankAccount/repositories/IBankAccountsRepository";
import { BankAccount } from "../entities/BankAccount";
import { DeleteResult, Repository, getRepository } from "typeorm";


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

    async findById(id: string): Promise<BankAccount> {
        const bankAccount = await this.repository.findOne(id);

        return bankAccount;
    }

    async list(): Promise<BankAccount[]> {
        const accountsList = await this.repository.find();

        return accountsList;
    }

    async deleteBankAccount(account_number: string): Promise<Boolean> {
        const isDeleted = await this.repository.delete({account_number});

        if(!isDeleted) {
            return false
        }

        return true;
    }
}

export { BankAccountsRepository };