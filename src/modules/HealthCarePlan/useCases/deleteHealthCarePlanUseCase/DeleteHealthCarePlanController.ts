import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteHealthCarePlanUseCase } from "./DeleteHealthCarePlanUseCase";

class DeleteHealthCarePlanController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;

            const deleteHealthCarePlanUseCase = container.resolve(DeleteHealthCarePlanUseCase);

            await deleteHealthCarePlanUseCase.execute(id);

            return response.status(200).json("Sucessful deleted");

        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
}

export { DeleteHealthCarePlanController };