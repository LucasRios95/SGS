import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateHealthCarePlanUseCase } from "./CreateHealthCarePlanUseCase";

class CreateHealthCarePlanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            description,
            pay_value,
            receive_value,
            created_at
        } = request.body;

        const createHealthCarePlanUseCase = container.resolve(CreateHealthCarePlanUseCase);

        const healthCarePlan = await createHealthCarePlanUseCase.execute({
            id,
            description,
            pay_value,
            receive_value,
            created_at
        });

        return response.status(201).json(healthCarePlan);
    }
}

export { CreateHealthCarePlanController };