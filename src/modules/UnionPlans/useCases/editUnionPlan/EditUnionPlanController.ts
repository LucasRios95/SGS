import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditUnionPlanUseCase } from "./EditUnionPlanUseCase";

class EditUnionPlanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id_plan = request.params.id;
        const {
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_at
        } = request.body;

        const editUnionPlanUseCase = container.resolve(EditUnionPlanUseCase);

        const editedPlan = await editUnionPlanUseCase.execute(`${id_plan}`,
            {
                id,
                payment_type,
                value,
                status,
                id_affiliate,
                created_at
            }
        );

        return response.status(200).json(editedPlan);
    }
}

export { EditUnionPlanController };