import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUnionPlanUseCase } from "./DeleteUnionPlanUseCase";

class DeleteUnionPlanController {

    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const deleteUnionPlanUseCase = container.resolve(DeleteUnionPlanUseCase);

        const deletedPlan = deleteUnionPlanUseCase.execute(id);

        return response.status(200).json('message: Union Plan deleted with success!');

    }
}

export { DeleteUnionPlanController };