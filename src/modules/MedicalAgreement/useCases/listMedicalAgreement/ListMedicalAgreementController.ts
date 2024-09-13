import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMedicalAgreementUseCase } from "./ListMedicalAgreementUseCase";

class ListMedicalAgreementController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const listMedicalAgreementUseCase = container.resolve(ListMedicalAgreementUseCase);

            const medicalAgreements = await listMedicalAgreementUseCase.execute();

            return response.status(200).json(medicalAgreements);

        } catch (error) {
            return response.status(404).json({ error: error.message });
        }
    }
}

export { ListMedicalAgreementController };