import { MedicalAgreement } from "modules/MedicalAgreement/infra/typeorm/entities/MedicalAgreement";
import { IMedicalAgreementRepository } from "modules/MedicalAgreement/repositories/IMedicalAgreementRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
    name: string
    address: string;
    city: string;
    uf: string;
    cep: string;
    phone: string;
    email: string;
    created_at: Date;
}

@injectable()
class CreateMedicalAgreementUseCase {
    constructor(
        @inject("MedicalAgreementRepository")
        private medicalAgreementRepository: IMedicalAgreementRepository
    ) { }

    async execute({
        id,
        name,
        address,
        city,
        uf,
        cep,
        email,
        phone,
        created_at
    }: IRequest): Promise<MedicalAgreement> {
        const medicalAgreement = await this.medicalAgreementRepository.create({
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

        if (!medicalAgreement) {
            throw new AppError("Medical Agreement could not be created");
        }

        return medicalAgreement;
    }
}

export { CreateMedicalAgreementUseCase }