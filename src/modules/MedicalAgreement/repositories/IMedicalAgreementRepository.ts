import { ICreateMedicalAgreementDTO } from "../dtos/ICreateMedicalAgreementDTO";
import { MedicalAgreement } from "../infra/typeorm/entities/MedicalAgreement";

export interface IMedicalAgreementRepository {
    create(data: ICreateMedicalAgreementDTO): Promise<MedicalAgreement>;
    list(): Promise<MedicalAgreement[]>;
    findById(id: string): Promise<MedicalAgreement>;
    edit(id_MedicalAgreement: string, data: ICreateMedicalAgreementDTO): Promise<MedicalAgreement>;
    delete(id: string): Promise<boolean>;
}