import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUnionPlanUseCase } from "./CreateUnionPlanUseCase";


class CreateUnionPlanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_At
        } = request.body;

        const createUnionPlanUseCase = container.resolve(CreateUnionPlanUseCase);

        const unionPlan = await createUnionPlanUseCase.execute({
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_At
        });

        return response.status(201).json(unionPlan);
    }
}

export { CreateUnionPlanController };