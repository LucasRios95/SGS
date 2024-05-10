import { ICreateFinancialTransactionDto } from "../dtos/ICreateFinancialTransactionDTO";
import { FinancialTransaction } from "../infra/typeorm/entities/FinancialTransaction";

export interface IFinancialTransactionRepository {
    create(data: ICreateFinancialTransactionDto): Promise<FinancialTransaction>;
    list(): Promise<FinancialTransaction[]>;
    edit(id_transaction, data: ICreateFinancialTransactionDto): Promise<FinancialTransaction>;
    delete(id: string): Promise<boolean>;
}