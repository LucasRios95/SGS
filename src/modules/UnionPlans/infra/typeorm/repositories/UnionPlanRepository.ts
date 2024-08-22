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
        created_at
    }: ICreateUnionPlanDto): Promise<UnionPlan> {
        const unionPlan = this.repository.create({
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_at
        });

        this.repository.save(unionPlan)

        return unionPlan;
    }

    async list(): Promise<UnionPlan[]> {
        const UnionPlansList = await this.repository.find()

        return UnionPlansList;
    }

    async findById(id: string): Promise<UnionPlan> {
        const unionPlan = await this.repository.findOne(id);

        return unionPlan;
    }

    async edit(id_plan: string, {
        id,
        payment_type,
        value,
        status,
        id_affiliate,
        created_at
    }): Promise<UnionPlan> {
        const unionPlan = await this.repository.save({
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_at
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