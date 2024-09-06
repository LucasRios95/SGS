import { HealthCarePlan } from "modules/HealthCarePlan/infra/typeorm/entities/HealthCarePlan";
import { IHealthCarePlanRepository } from "modules/HealthCarePlan/repositories/IHealthCarePlanRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListHealthCarePlanUseCase {
    constructor(
        @inject("HealthCarePlanRepository")
        private healthCarePlanRepository: IHealthCarePlanRepository
    ) { }

    async execute(): Promise<HealthCarePlan[]> {
        const healthCarePlans = await this.healthCarePlanRepository.list();

        if (healthCarePlans.length == 0) {
            throw new AppError("Health Care plan list is empty");
        }

        return healthCarePlans;
    }
}

export { ListHealthCarePlanUseCase };