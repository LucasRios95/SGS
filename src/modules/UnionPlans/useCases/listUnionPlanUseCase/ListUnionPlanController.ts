import { Request, Response } from "express";
import { container } from "tsyringe";
import { LIstUnionPlanUseCase } from "./ListUnionPlanUseCase";


class ListUnionPlanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUnionPlanUseCase = container.resolve(LIstUnionPlanUseCase);

        const listUnionPlans = await listUnionPlanUseCase.execute();

        return response.status(200).json(listUnionPlans);
    }
}

export { ListUnionPlanController };