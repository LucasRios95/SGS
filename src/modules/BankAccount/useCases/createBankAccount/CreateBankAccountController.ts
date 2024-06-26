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
            created_at,
            balance
        } = request.body;

        const createBankAccountUseCase = container.resolve(CreateBankAccountUseCase);
        
        const bankAccount = await createBankAccountUseCase.execute({
            account_number,
            digit,
            our_number,
            message,
            id_bank,
            id_company,
            created_at,
            balance
        });

        return response.status(201).json(bankAccount);
    }
}

export { CreateBankAccountController };