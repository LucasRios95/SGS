import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteFinancialPostingUseCase } from "./DeleteFinancialPostingUseCase";

class DeleteFinancialPostingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteFinancialPostingUseCase = container.resolve(DeleteFinancialPostingUseCase);
        const isDeleted = deleteFinancialPostingUseCase.execute(id);

        return response.status(200).json("Successful Deleted");
    }
}

export { DeleteFinancialPostingController };