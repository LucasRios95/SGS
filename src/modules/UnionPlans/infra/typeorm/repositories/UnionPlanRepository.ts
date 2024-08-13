import { IUnionPlanRepository } from "modules/UnionPlans/repositories/IUnionPlanRepository";
import { getRepository, Repository } from "typeorm";
import { UnionPlan } from "../entities/UnionPlan";
import { ICreateUnionPlanDto } from "modules/UnionPlans/dtos/ICreateUnionPlanDTO";

class UnionPlanRepository implements IUnionPlanRepository {
    private repository: Repository<UnionPlan>;

    constructor() {
        this.repository = getRepository(UnionPlan)
    }

    async create({
        id,
        payment_type,
        value,
        status,
        id_affiliate,
        created_At
    }: ICreateUnionPlanDto): Promise<UnionPlan> {
        const unionPlan = await this.repository.save({
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_At
        });

        return unionPlan;
    }

    async list(): Promise<UnionPlan[]> {
        const UnionPlansList = await this.repository.find()

        return UnionPlansList;
    }

    async edit(id_plan: string, {
        id,
        payment_type,
        value,
        status,
        id_affiliate,
        created_At
    }): Promise<UnionPlan> {
        const unionPlan = await this.repository.save({
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_At
        });

        return unionPlan;
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete(id);

        if (!isDeleted) {
            return false
        }

        return true;
    }
}

export { UnionPlanRepository };