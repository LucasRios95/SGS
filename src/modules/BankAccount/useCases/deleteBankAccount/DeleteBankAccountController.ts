import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteBankAccountUseCase } from "./DeleteBankAccountUseCase";


class DeleteBankAccountController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { account_number } = request.params;
        const deleteBankAccountUsecase = container.resolve(DeleteBankAccountUseCase);

        await deleteBankAccountUsecase.execute(account_number);

        return response.status(200);

    }
}

export { DeleteBankAccountController };