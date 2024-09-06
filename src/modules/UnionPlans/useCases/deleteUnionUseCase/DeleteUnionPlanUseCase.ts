import { IUnionPlanRepository } from "modules/UnionPlans/repositories/IUnionPlanRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUnionPlanUseCase {
    constructor(
        @inject("UnionPlanRepository")
        private unionPlanRepository: IUnionPlanRepository
    ) { }

    async execute(id: string): Promise<boolean> {
        const isDeleted = await this.unionPlanRepository.delete(id);

        if (!isDeleted) {
            throw new AppError("Union plan is not deleted", 500);
        }

        return true;
    }
}

export { DeleteUnionPlanUseCase };