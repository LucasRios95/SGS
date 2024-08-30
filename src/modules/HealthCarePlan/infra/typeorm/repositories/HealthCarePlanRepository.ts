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
        created_at
    }: ICreateHealthCarePlanDTO): Promise<HealthCarePlan> {
        const healthCarePlan = this.repository.create({
            id,
            description,
            pay_value,
            receive_value,
            created_at
        });

        this.repository.save(healthCarePlan);

        return healthCarePlan;
    }

    async list(): Promise<HealthCarePlan[]> {
        const healthCarePlans = await this.repository.find();

        return healthCarePlans;
    }

    async edit(id_carePlan: string, {
        id,
        description,
        pay_value,
        receive_value,
        created_at
    }: ICreateHealthCarePlanDTO): Promise<HealthCarePlan> {
        const editedPlan = await this.repository.save({
            id,
            description,
            pay_value,
            receive_value,
            created_at
        });

        return editedPlan;
    }

    async delete(id_carePlan: string): Promise<boolean> {
        const isDeleted = await this.repository.delete(id_carePlan);

        if (!isDeleted) {
            return false;
        }

        return true;
    }
}

export { HealthCarePlanRepository };