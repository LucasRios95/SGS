import { UnionPlan } from "modules/UnionPlans/infra/typeorm/entities/UnionPlan";
import { IUnionPlanRepository } from "modules/UnionPlans/repositories/IUnionPlanRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
    payment_type: string;
    value: number;
    status: string,
    id_affiliate: string,
    created_At: Date;
}

injectable()
class CreateUnionPlanUseCase {
    constructor(
        @inject("UnionPlanRepository")
        private unionPlanRepository: IUnionPlanRepository
    ) { }

    async execute({
        id,
        payment_type,
        value,
        status,
        id_affiliate,
        created_At
    }: IRequest): Promise<UnionPlan> {
        const unionPlan = await this.unionPlanRepository.create({
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_At
        });

        return unionPlan;
    }
}

export { CreateUnionPlanUseCase };