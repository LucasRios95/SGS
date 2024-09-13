import { IHealthCarePlanRepository } from "modules/HealthCarePlan/repositories/IHealthCarePlanRepository";
import { getRepository, Repository } from "typeorm";
import { HealthCarePlan } from "../entities/HealthCarePlan";
import { ICreateHealthCarePlanDTO } from "modules/HealthCarePlan/dtos/ICreateHealthCarePlanDTO";

class HealthCarePlanRepository implements IHealthCarePlanRepository {
    private repository: Repository<HealthCarePlan>;

    constructor() {
        this.repository = getRepository(HealthCarePlan);
    }

    async create({
        id,
        description,
        pay_value,
        receive_value,
        id_medicalAgreement
    }: ICreateHealthCarePlanDTO): Promise<HealthCarePlan> {
        const healthCarePlan = this.repository.create({
            id,
            description,
            pay_value,
            receive_value,
            id_medicalAgreement
        });

        await this.repository.save(healthCarePlan);

        return healthCarePlan;
    }

    async list(): Promise<HealthCarePlan[]> {
        const healthCarePlans = await this.repository.find();

        return healthCarePlans;
    }

    async findById(id: string): Promise<HealthCarePlan> {
        const healthCarePlan = await this.repository.findOne(id);

        return healthCarePlan;
    }

    async edit(id_carePlan: string, {
        id,
        description,
        pay_value,
        receive_value,
        id_medicalAgreement,
    }: ICreateHealthCarePlanDTO): Promise<HealthCarePlan> {
        const editedPlan = await this.repository.save({
            id,
            description,
            pay_value,
            receive_value,
            id_medicalAgreement
        });

        return editedPlan;
    }

    async findByIds(ids: string[]): Promise<HealthCarePlan[]> {
        const healthCarePlans = await this.repository.findByIds(ids);

        return healthCarePlans;
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete(id);

        if (!isDeleted) {
            return false;
        }

        return true;
    }
}

export { HealthCarePlanRepository };