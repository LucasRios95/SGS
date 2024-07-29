import { FinancialPosting } from "modules/FinancialPostings/infra/typeorm/entities/FinancialPosting";
import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    posting_type: string;
    description: string;
    value: number;
    discount: number;
    fee: number;
    tax: number;
    due_date: Date;
    id_account: string;
    id_category: string;
    payment_status: string;
};

@injectable()
class CreateFinancialPostingUseCase {
    constructor(
        @inject("FinancialPostingRepository")
        private createFinancialPostingRepository: IFinancialPostingRepository
    ) { }

    async execute({
        posting_type,
        description,
        value,
        discount,
        fee,
        tax,
        due_date,
        id_account,
        id_category,
        payment_status = 'pending'
    }: IRequest): Promise<FinancialPosting> {

        const financialPosting = await this.createFinancialPostingRepository.create({
            posting_type,
            description,
            value,
            discount,
            fee,
            tax,
            due_date,
            id_account,
            id_category,
            payment_status
        });

        return financialPosting;
    }
}

export { CreateFinancialPostingUseCase }