import { ICreateHealthCarePlanDTO } from "../dtos/ICreateHealthCarePlanDTO";
import { HealthCarePlan } from "../infra/typeorm/entities/HealthCarePlan";


export interface IHealthCarePlanRepository {
    create(data: ICreateHealthCarePlanDTO): Promise<HealthCarePlan>;
    list(): Promise<HealthCarePlan[]>;
    findById(id: string): Promise<HealthCarePlan>;
    edit(id_carePlan: string, data: ICreateHealthCarePlanDTO): Promise<HealthCarePlan>;
    findByIds(ids: string[]): Promise<HealthCarePlan[]>;
    delete(id_carePlan: string): Promise<boolean>;
}
