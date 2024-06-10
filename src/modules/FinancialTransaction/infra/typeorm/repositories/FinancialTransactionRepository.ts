import { IFinancialTransactionRepository } from "modules/FinancialTransaction/repositories/IFinancialTransactionRepository";
import { Repository, getRepository } from "typeorm";
import { FinancialTransaction } from "../entities/FinancialTransaction";
import { ICreateFinancialTransactionDto } from "modules/FinancialTransaction/dtos/ICreateFinancialTransactionDTO";

class FinancialTransactionRepository implements IFinancialTransactionRepository {
    private repository: Repository<FinancialTransaction>;

    constructor() {
        this.repository = getRepository(FinancialTransaction);
    }

    async create({
        id,
        description,
        value,
        date,
        payment_type,
        payment_method,
        id_account,
        id_financialPosting,
        created_at
    }): Promise<FinancialTransaction> {
        const financialTransaction = this.repository.create({
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

        await this.repository.save(financialTransaction);

        return financialTransaction;
    }

    async list(): Promise<FinancialTransaction[]> {
        const transactionList = await this.repository.find();

        return transactionList;
    }

    async edit(id_transaction: string, {
        id,
        description,
        value,
        date,
        payment_type,
        payment_method,
        id_account,
        id_financialPosting,
        created_at
    }): Promise<FinancialTransaction> {
        const financialTransaction = await this.repository.save({
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

        return financialTransaction;
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete(id);

        if (!isDeleted) {
            return false;
        }

        return true;
    }
}

export { FinancialTransactionRepository };

