import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteMedicalAgreementUseCase } from "./DeleteMedicalAgreementUseCase";

class DeleteMedicalAgreementController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;

            const deleteMedicalAgreementUseCase = container.resolve(DeleteMedicalAgreementUseCase);

            await deleteMedicalAgreementUseCase.execute(id);

            return response.status(200).json({ "Status": "Medical Agreement deleted" });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
}

export { DeleteMedicalAgreementController };