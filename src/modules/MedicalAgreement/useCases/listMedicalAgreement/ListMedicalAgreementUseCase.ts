import { MedicalAgreement } from "modules/MedicalAgreement/infra/typeorm/entities/MedicalAgreement";
import { IMedicalAgreementRepository } from "modules/MedicalAgreement/repositories/IMedicalAgreementRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class ListMedicalAgreementUseCase {
    constructor(
        @inject("MedicalAgreementRepository")
        private medicalAgreementRepository: IMedicalAgreementRepository
    ) { }

    async execute(): Promise<MedicalAgreement[]> {
        const medicalAgreements = await this.medicalAgreementRepository.list();

        if (medicalAgreements.length == 0) {
            throw new AppError("No registered agreements");
        }

        return medicalAgreements
    }
}

export { ListMedicalAgreementUseCase };