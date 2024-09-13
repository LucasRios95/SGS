import { FinancialPosting } from "modules/FinancialPostings/infra/typeorm/entities/FinancialPosting";
import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
    posting_type?: string;
    description?: string;
    value?: number;
    discount?: number;
    fee?: number;
    tax?: number;
    due_date?: Date;
    id_account?: string;
    id_category?: string;
};


@injectable()
class EditFinancialPostingUseCase {
    constructor(
        @inject("FinancialPostingRepository")
        private financialPostingRepository: IFinancialPostingRepository
    ) { }

    async execute(id_financialPosting: string, {
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
    }: IRequest): Promise<FinancialPosting> {
        const financialPostingExists = await this.financialPostingRepository.findById(id_financialPosting);

        if(!financialPostingExists) {
            throw new AppError("Lançamento não encontrado!", 404);
        }  

        const financialPosting = await this.financialPostingRepository.edit(id_financialPosting, {
            id: id_financialPosting,
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
}

export { EditFinancialPostingUseCase };