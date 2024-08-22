import { UnionPlan } from "modules/UnionPlans/infra/typeorm/entities/UnionPlan";
import { IUnionPlanRepository } from "modules/UnionPlans/repositories/IUnionPlanRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class LIstUnionPlanUseCase {
    constructor(
        @inject("UnionPlanRepository")
        private unionPlanRepository: IUnionPlanRepository
    ) { }

    async execute(): Promise<UnionPlan[]> {
        const listUnionPlan = await this.unionPlanRepository.list();

        return listUnionPlan;
    }
}

export { LIstUnionPlanUseCase };