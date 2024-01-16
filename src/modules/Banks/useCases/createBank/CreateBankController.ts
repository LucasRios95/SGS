import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBankUseCase } from "./CreateBankUseCase";

class CreateBankController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            agency,
            station,
            phone,
            created_at
        } = request.body;

        const createBankUseCase = container.resolve(CreateBankUseCase);

        const bank = await createBankUseCase.execute({
            name,
            agency,
            station,
            phone,
            created_at
        });

        return response.status(201).json(bank);
    }
}

export { CreateBankController };