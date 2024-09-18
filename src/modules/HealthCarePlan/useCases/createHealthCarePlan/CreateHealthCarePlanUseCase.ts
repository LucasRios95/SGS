import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { HealthCarePlan } from "modules/HealthCarePlan/infra/typeorm/entities/HealthCarePlan";
import { IHealthCarePlanRepository } from "modules/HealthCarePlan/repositories/IHealthCarePlanRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id?: string;
    description: string;
    pay_value: number;
    receive_value: number;
    id_medicalAgreement: string;
}

@injectable()
class CreateHealthCarePlanUseCase {
    constructor(
        @inject("HealthCarePlanRepository")
        private healthCarePlanRepository: IHealthCarePlanRepository,
    ) { }

    async execute({
        id,
        description,
        pay_value,
        receive_value,
        id_medicalAgreement,

    }: IRequest): Promise<HealthCarePlan> {
        const healthCarePlan = await this.healthCarePlanRepository.create({
            id,
            description,
            pay_value,
            receive_value,
            id_medicalAgreement,
        });

        return healthCarePlan;
    }
}

export { CreateHealthCarePlanUseCase };