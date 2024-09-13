import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditFinancialPostingUseCase } from "./EditFinancialPostingUseCase";


class EditFinancialPostingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id_financialPosting = request.params.id;
        
        const {
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
        } = request.body;

        const editFinancialPostingUseCase = container.resolve(EditFinancialPostingUseCase);

        const financialPosting = await editFinancialPostingUseCase.execute(id_financialPosting, {
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

        return response.status(200).json(financialPosting);
    }
}

export { EditFinancialPostingController };