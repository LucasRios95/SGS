import { IEditFinancialPostingDto } from "../dtos/IEditFinancialPostingDTO";
import { IFinancialPostingDto } from "../dtos/IFinancialPostingDTO";
import { FinancialPosting } from "../infra/typeorm/entities/FinancialPosting";

interface IFinancialPostingRepository {
    create(data: IFinancialPostingDto): Promise<FinancialPosting>;
    list(): Promise<FinancialPosting[]>;
    findById(id: string): Promise<FinancialPosting>; 
    edit(id_financialPosting: string, data: IEditFinancialPostingDto): Promise<FinancialPosting>;
    updateStatus(id_financialPosting: string, status: string): Promise<void>;
    delete(id: string): Promise<boolean>;
}

export { IFinancialPostingRepository };