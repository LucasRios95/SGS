import { IHealthCarePlanRepository } from "modules/HealthCarePlan/repositories/IHealthCarePlanRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteHealthCarePlanUseCase {
    constructor(
        @inject("HealthCarePlanRepository")
        private healthCarePlanRepository: IHealthCarePlanRepository
    ) { }

    async execute(id: string): Promise<Boolean> {
        const healthCarePlan = await this.healthCarePlanRepository.findById(id);

        if (!healthCarePlan) {
            throw new AppError("Union plan does not exists", 404);
        }

        const isDeleted = await this.healthCarePlanRepository.delete(id);

        if (!isDeleted) {
            return false;
        }

        return true;
    }
}

export { DeleteHealthCarePlanUseCase };