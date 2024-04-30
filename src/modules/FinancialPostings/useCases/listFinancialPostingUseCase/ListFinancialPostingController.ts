import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListFinancialPostingUseCase } from "./ListFinancialPostingUseCase";


class ListFinancialPostingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listFinancialPostingUseCase = container.resolve(ListFinancialPostingUseCase);

        const financialPostings = await listFinancialPostingUseCase.execute();

        return response.status(200).json(financialPostings);
    }
}

export { ListFinancialPostingController };