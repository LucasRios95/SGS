import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFinancialPostingUseCase } from "./CreateFinancialPostingUseCase";

class CreateFinancialPostingController {
   async handle(request: Request, response: Response): Promise<Response> {
        const {
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

        const createFinancialPostingUseCase = container.resolve(CreateFinancialPostingUseCase);

        const financialPosting = await createFinancialPostingUseCase.execute({
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

        return response.status(201).json(financialPosting);
   }
}

export { CreateFinancialPostingController };