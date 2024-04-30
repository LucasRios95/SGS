import { Repository, getRepository } from "typeorm";
import { FinancialPosting } from "../entities/FinancialPosting";
import { IFinancialPostingDto } from "modules/FinancialPostings/dtos/IFinancialPostingDTO";
import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";



class FinancialPostingRepository implements IFinancialPostingRepository {
    private repository: Repository<FinancialPosting>;

    constructor() {
        this.repository = getRepository(FinancialPosting);
    }

    async create({
        id,
        posting_type,
        description,
        value,
        discount,
        fee,
        tax,
        due_date,
        id_account,
        id_category

    }): Promise<FinancialPosting> {
        const financialPosting = this.repository.create({
            id,
            posting_type,
            description,
            value,
            discount,
            fee,
            tax,
            due_date,
            id_account,
            id_category
        });

        await this.repository.save(financialPosting);

        return financialPosting;
    }


    async list(): Promise<FinancialPosting[]> {
        const financialPostings = await this.repository.find();

        return financialPostings;
    }

    async findById(id: string): Promise<FinancialPosting> {
        const financialPosting = await this.repository.findOne(id);

        return financialPosting;
    }

    async edit(id_financialPosting: string, {
        id,
        posting_type,
        description,
        value,
        discount,
        fee,
        tax,
        due_date,
        id_account,
        id_category
    }): Promise<FinancialPosting> {
        const financialPosting = await this.repository.save({
            id,
            posting_type,
            description,
            value,
            discount,
            fee,
            tax,
            due_date,
            id_account,
            id_category
        });

        return financialPosting;
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete({ id });

        if (!isDeleted) {
            return false;
        }

        return true;
    }
}

export { FinancialPostingRepository };