import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMedicalAgreementUseCase } from "./CreateMedicalAgreementUseCase";

class CreateMedicalAgreementController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {
                id,
                name,
                address,
                city,
                uf,
                cep,
                email,
                phone,
                created_at
            } = request.body;

            const createMedicalAgreementUseCase = container.resolve(CreateMedicalAgreementUseCase);

            const medicalAgreement = await createMedicalAgreementUseCase.execute({
                id,
                name,
                address,
                city,
                uf,
                cep,
                email,
                phone,
                created_at
            });

            return response.status(201).json(medicalAgreement);

        } catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}

export { CreateMedicalAgreementController };