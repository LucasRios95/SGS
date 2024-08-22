import { ICreateUnionPlanDto } from "../dtos/ICreateUnionPlanDTO";
import { UnionPlan } from "../infra/typeorm/entities/UnionPlan";


export interface IUnionPlanRepository {
    create(data: ICreateUnionPlanDto): Promise<UnionPlan>;
    list(): Promise<UnionPlan[]>;
    findById(id: string): Promise<UnionPlan>;
    edit(id_plan: string, data: ICreateUnionPlanDto): Promise<UnionPlan>;
    delete(id: string): Promise<boolean>;
}