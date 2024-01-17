import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListBankUseCase } from "./ListBankUseCase";

class ListBankController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listBankUseCase = container.resolve(ListBankUseCase);

        const banks = await listBankUseCase.execute();

        return response.status(200).json(banks);
    }
}

export { ListBankController };

