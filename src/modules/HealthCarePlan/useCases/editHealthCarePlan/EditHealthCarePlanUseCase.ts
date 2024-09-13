import { HealthCarePlan } from "modules/HealthCarePlan/infra/typeorm/entities/HealthCarePlan";
import { IHealthCarePlanRepository } from "modules/HealthCarePlan/repositories/IHealthCarePlanRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";


interface IRequest {
    id: string;
    description: string;
    pay_value: number;
    receive_value: number;
    id_medicalAgreement: string;
}

@injectable()
class EditHealthCarePlanUseCase {
    constructor(
        @inject("HealthCarePlanRepository")
        private healthCarePlanRepository: IHealthCarePlanRepository
    ) { }

    async execute(id_carePlan: string, {
        id,
        description,
        pay_value,
        receive_value,
        id_medicalAgreement
    }: IRequest): Promise<HealthCarePlan> {
        const healthCarePlan = await this.healthCarePlanRepository.findById(id_carePlan);

        if (!healthCarePlan) {
            throw new AppError("Health Care Plan not found, please try another one", 404);
        }

        const editedPlan = await this.healthCarePlanRepository.edit(id_carePlan, {
            id: healthCarePlan.id,
            description,
            pay_value,
            receive_value,
            id_medicalAgreement
        });

        return editedPlan;
    }
}

export { EditHealthCarePlanUseCase };