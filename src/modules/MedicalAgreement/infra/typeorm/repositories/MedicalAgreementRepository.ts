import { getRepository, Repository } from "typeorm";
import { MedicalAgreement } from "../entities/MedicalAgreement";
import { ICreateMedicalAgreementDTO } from "modules/MedicalAgreement/dtos/ICreateMedicalAgreementDTO";
import { IMedicalAgreementRepository } from "modules/MedicalAgreement/repositories/IMedicalAgreementRepository";

class MedicalAgreementRepository implements IMedicalAgreementRepository {
    private repository: Repository<MedicalAgreement>

    constructor() {
        this.repository = getRepository(MedicalAgreement)
    }

    async create({
        id,
        name,
        address,
        city,
        uf,
        cep,
        phone,
        email,
        created_at
    }: ICreateMedicalAgreementDTO): Promise<MedicalAgreement> {
        const medicalAgreement = this.repository.create({
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

        this.repository.save(medicalAgreement);

        return medicalAgreement;
    }

    async list(): Promise<MedicalAgreement[]> {
        const medicalAgreements = await this.repository.find();

        return medicalAgreements;
    }

    async findById(id: string): Promise<MedicalAgreement> {
        const medicalAgreement = await this.repository.findOne({ id });

        return medicalAgreement;
    }

    async edit(id_MedicalAgreement: string, {
        id,
        name,
        city,
        uf,
        cep,
        phone,
        email,
        created_at
    }: ICreateMedicalAgreementDTO): Promise<MedicalAgreement> {
        const medicalAgreement = await this.repository.save({
            id,
            name,
            city,
            uf,
            cep,
            phone,
            email,
            created_at
        });

        return medicalAgreement;
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete(id);

        if (!isDeleted) {
            return false;
        }

        return true;
    }
}

export { MedicalAgreementRepository };