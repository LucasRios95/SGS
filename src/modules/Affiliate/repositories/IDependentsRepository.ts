import { ICreateDependentDto } from "../dtos/ICreateDependtDTO"
import { IEditDependentDto } from "../dtos/IEditDependentDTO";
import { Dependent } from "../infra/typeorm/entities/Dependent"

interface IDependentsRepository {
    create(data: ICreateDependentDto): Promise<Dependent>;
    list(): Promise<Dependent[]>;
    findById(id: string): Promise<Dependent>;
    update(id: string, data: IEditDependentDto): Promise<Dependent>;
    delete(id: string): Promise<boolean>; 
}

export { IDependentsRepository }

