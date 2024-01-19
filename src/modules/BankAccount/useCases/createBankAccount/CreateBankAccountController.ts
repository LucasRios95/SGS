import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBankAccountUseCase } from "./CreateBankAccountUseCase";

class CreateBankAccountController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            account_number,
            digit,
            our_number,
            message,
            id_bank,
            id_company,
            created_at
        } = request.body;

        const createBankAccoountController = container.resolve(CreateBankAccountUseCase);
        
        const bankAccount = createBankAccoountController.execute({
            account_number,
            digit,
            our_number,
            message,
            id_bank,
            id_company,
            created_at
        });

        return response.status(201).json(bankAccount);
    }
}