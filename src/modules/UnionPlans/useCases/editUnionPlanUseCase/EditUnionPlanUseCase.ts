import { UnionPlan } from "modules/UnionPlans/infra/typeorm/entities/UnionPlan";
import { IUnionPlanRepository } from "modules/UnionPlans/repositories/IUnionPlanRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id?: string;
    payment_type: string;
    value: number;
    status: string,
    id_affiliate: string,
    created_at: Date;
}

@injectable()
class EditUnionPlanUseCase {
    constructor(
        @inject("UnionPlanRepository")
        private unionPlanRepository: IUnionPlanRepository
    ) { }

    async execute(id_plan, {
        id,
        payment_type,
        value,
        status,
        id_affiliate,
        created_at
    }: IRequest): Promise<UnionPlan> {
        const unionPlan = await this.unionPlanRepository.findById(id_plan);

        if (!unionPlan) {
            throw new AppError("Union plan does not exists");
        }

        const editedPlan = await this.unionPlanRepository.edit(id_plan, {
            id,
            payment_type,
            value,
            status,
            id_affiliate,
            created_at
        });

        return editedPlan;
    }

}

export { EditUnionPlanUseCase };