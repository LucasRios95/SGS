import { IDependentsRepository } from "modules/Affiliate/repositories/IDependentsRepository";
import { Repository, getRepository } from "typeorm";
import { Dependent } from "../entities/Dependent";
import { ICreateDependentDto } from "modules/Affiliate/dtos/ICreateDependtDTO";
import { IEditDependentDto } from "modules/Affiliate/dtos/IEditDependentDTO";
class DependentRepository implements IDependentsRepository {
    private repository: Repository<Dependent>

    constructor() {
        this.repository = getRepository(Dependent);
    }

    async create({
        name,
        birth_date,
        email,
        phone,
        address,
        city,
        uf,
        cep,
        active,
        gender,
        id_affiliate,
        created_at
    }): Promise<Dependent> {

        const dependent = this.repository.create({
            name,
            birth_date,
            email,
            phone,
            address,
            city,
            uf,
            cep,
            active,
            gender,
            id_affiliate,
            created_at
        });

        await this.repository.save(dependent);

        return dependent;
    }

    async list(): Promise<Dependent[]> {
        const dependents = await this.repository.find();

        return dependents; 
    }
    async findById(id: string): Promise<Dependent> {
        const dependent = await this.repository.findOne({id});

        return dependent;
    }

    update(id: string, data: IEditDependentDto): Promise<Dependent> {
        throw new Error("Method not implemented.");
    }
    
    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete(id);

        if (!isDeleted) {
            return false;
        }

        return true;
    }

}

export { DependentRepository };