import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListHealthCarePlanUseCase } from "./ListHealthCarePlanUseCase";

class ListHealthCarePlanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listHealthCarePlanUseCase = container.resolve(ListHealthCarePlanUseCase);

        const listHealthCarePlans = await listHealthCarePlanUseCase.execute();

        return response.status(200).json(listHealthCarePlans);
    }
}

export { ListHealthCarePlanController };