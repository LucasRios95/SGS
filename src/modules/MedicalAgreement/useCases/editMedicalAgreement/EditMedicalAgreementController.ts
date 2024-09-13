import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditMedicalAgreementUseCase } from "./EditMedicalAgreementUseCase";

class EditMedicalAgreementController {
    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const id_MedicalAgreement = request.params.id;

            const {
                id,
                name,
                address,
                city,
                uf,
                cep,
                phone,
                email,
                created_at
            } = request.body;

            const editMedicalAgreementUseCase = container.resolve(EditMedicalAgreementUseCase);

            const medicalAgreement = await editMedicalAgreementUseCase.execute(id_MedicalAgreement, {
                id,
                name,
                address,
                city,
                uf,
                cep,
                phone,
                email,
                created_at
            });

            return response.status(200).json(medicalAgreement);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
}

export { EditMedicalAgreementController };