import { Request, Response } from "express";
import { container } from "tsyringe";
import { ApplyFineUseCase } from "./ApplyFineUseCase";



class ApplyFineController {
    async handle(request: Request, response: Response): Promise<Response> {
        const applyFineUseCase = container.resolve(ApplyFineUseCase);

        const fineApplied = await applyFineUseCase.execute();

        return response.status(200).json(fineApplied);
    }
}

export { ApplyFineController };