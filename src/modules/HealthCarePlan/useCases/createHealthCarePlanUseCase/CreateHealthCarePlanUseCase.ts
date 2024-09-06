import { HealthCarePlan } from "modules/HealthCarePlan/infra/typeorm/entities/HealthCarePlan";
import { IHealthCarePlanRepository } from "modules/HealthCarePlan/repositories/IHealthCarePlanRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id?: string;
    description: string;
    pay_value: number;
    receive_value: number;
    created_at: Date;
}

@injectable()
class CreateHealthCarePlanUseCase {
    constructor(
        @inject("HealthCarePlanRepository")
        private healthCarePlanRepository: IHealthCarePlanRepository
    ) { }

    async execute({
        id,
        description,
        pay_value,
        receive_value,
        created_at
    }: IRequest): Promise<HealthCarePlan> {
        const healthCarePlan = await this.healthCarePlanRepository.create({
            id,
            description,
            pay_value,
            receive_value,
            created_at
        });

        return healthCarePlan;
    }
}

export { CreateHealthCarePlanUseCase };