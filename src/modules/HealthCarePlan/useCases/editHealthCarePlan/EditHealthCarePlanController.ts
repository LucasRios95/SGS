import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditHealthCarePlanUseCase } from "./EditHealthCarePlanUseCase";

class EditHealthCarePlanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id_carePlan = request.params.id;
        const {
            id,
            description,
            pay_value,
            receive_value,
            id_medicalAgreement
        } = request.body;

        const editHealthCarePlanUseCase = container.resolve(EditHealthCarePlanUseCase);

        const editedPlan = await editHealthCarePlanUseCase.execute(id_carePlan, {
            id,
            description,
            pay_value,
            receive_value,
            id_medicalAgreement
        });

        return response.status(200).json(editedPlan);
    }
}

export { EditHealthCarePlanController };