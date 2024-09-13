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
class EditMedicalAgreementUseCase {
    constructor(
        @inject("MedicalAgreementRepository")
        private medicalAgreementRepository: IMedicalAgreementRepository
    ) { }

    async execute(id_MedicalAgreement: string, {
        id,
        name,
        address,
        city,
        uf,
        cep,
        phone,
        email,
        created_at
    }: IRequest): Promise<MedicalAgreement> {
        const medicalAgreementExists = await this.medicalAgreementRepository.findById(id_MedicalAgreement);

        if (!medicalAgreementExists) {
            throw new AppError("Medical Agreement does not exists");
        }

        const medicalAgreement = await this.medicalAgreementRepository.edit(id_MedicalAgreement, {
            id: id_MedicalAgreement,
            name,
            address,
            city,
            uf,
            cep,
            phone,
            email,
            created_at
        });

        return medicalAgreement;
    }
}

export { EditMedicalAgreementUseCase };