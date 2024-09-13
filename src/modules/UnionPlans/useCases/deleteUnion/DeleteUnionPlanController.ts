import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUnionPlanUseCase } from "./DeleteUnionPlanUseCase";

class DeleteUnionPlanController {

    async handle(request: Request, response: Response) {
        try {
            const id = request.params.id;

            const deleteUnionPlanUseCase = container.resolve(DeleteUnionPlanUseCase);

            const isDeleted = deleteUnionPlanUseCase.execute(id);

            return response.status(200);

        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
}

export { DeleteUnionPlanController };