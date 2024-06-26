import { IDependentsRepository } from "modules/Affiliate/repositories/IDependentsRepository";
import { Repository, getRepository } from "typeorm";
import { Dependent } from "../entities/Dependent";

class DependentsRepository implements IDependentsRepository {
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

    async listByAffiliate(id_affiliate: string): Promise<Dependent[]> {
        const dependents = await this.repository.find({
            select: [
                "name",
                "email",
                "active"
            ],
            where: {
                id_affiliate: id_affiliate,
                active: true
            }
        });
        
        return dependents;
    }

    async findById(id: string): Promise<Dependent> {
        const dependent = await this.repository.findOne({ id });

        return dependent;
    }

    async edit(id_dependent: string, {
        id,
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
        const editedAffiliate = await this.repository.save({
            id,
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

        return editedAffiliate;
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete(id);

        if (!isDeleted) {
            return false;
        }

        return true;
    }

}

export { DependentsRepository };