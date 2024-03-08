import { ICreateDependentDto } from "../dtos/ICreateDependtDTO"
import { Dependent } from "../infra/typeorm/entities/Dependent"

interface IDependentsRepository {
    create(data: ICreateDependentDto): Promise<Dependent>;
    list(): Promise<Dependent[]>;
    findById(id: string): Promise<Dependent>;
    update(id: string, data?: ICreateDependentDto): Promise<Dependent>;
    delete(id: string): Promise<boolean>; 
}

export { IDependentsRepository }

