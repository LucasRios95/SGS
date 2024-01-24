import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListBankAccountUseCase } from "./ListBankAccountUseCase";

class ListBankAccountController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listBankAccountUsecase = container.resolve(ListBankAccountUseCase);

        const accountsList = await listBankAccountUsecase.execute();

        return response.status(200).json(accountsList);
    }
}

export { ListBankAccountController };