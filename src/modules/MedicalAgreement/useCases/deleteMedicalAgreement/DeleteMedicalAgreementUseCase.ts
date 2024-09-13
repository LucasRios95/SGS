import { IMedicalAgreementRepository } from "modules/MedicalAgreement/repositories/IMedicalAgreementRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteMedicalAgreementUseCase {
    constructor(
        @inject("MedicalAgreementRepository")
        private medicalAgreementRepository: IMedicalAgreementRepository
    ) { }

    async execute(id: string): Promise<boolean> {
        const medicalAgreementExists = await this.medicalAgreementRepository.findById(id);

        if (!medicalAgreementExists) {
            throw new AppError("Medical Agreement does not exists");
        }

        const isDeleted = await this.medicalAgreementRepository.delete(id);

        return isDeleted;
    }
}

export { DeleteMedicalAgreementUseCase };