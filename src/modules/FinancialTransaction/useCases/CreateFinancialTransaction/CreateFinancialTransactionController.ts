import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFinancialTransactionUseCase } from "./CreateFinancialTransactionUseCase";

class CreateFinancialTransactionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            description,
            value,
            date,
            payment_type,
            payment_method,
            id_account,
            id_financialPosting,
            created_at
        } = request.body;

        const createFinancialTransactionUseCase = container.resolve(CreateFinancialTransactionUseCase);

        const financialTransaction = await createFinancialTransactionUseCase.execute({
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

        return response.status(201).json(financialTransaction);
    }
}

export { CreateFinancialTransactionController };