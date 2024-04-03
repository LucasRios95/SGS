import { Dependent } from "modules/Affiliate/infra/typeorm/entities/Dependent";
import { AffiliatesRepository } from "modules/Affiliate/infra/typeorm/repositories/AffiliatesRepository";
import { DependentsRepository } from "modules/Affiliate/infra/typeorm/repositories/DependentsRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id?: string;
    name: string;
    birth_date: Date;
    email: string;
    phone: string;
    address: string;
    city: string;
    uf: string;
    cep: string;
    active: boolean;
    gender: string;
    id_affiliate: string;
    created_at: Date;
}

@injectable()
class EditDependentUseCase {
    constructor(
        @inject("DependentsRepository")
        private dependentsRepository: DependentsRepository,
        @inject("AffiliatesRepository")
        private affiliatesRepository: AffiliatesRepository,
    ) {}

    async execute(id_dependent: string, {
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
        const dependentExists = await this.dependentsRepository.findById(id_dependent);

        if(!dependentExists) {
            throw new AppError("Dependent does not exists", 404);
        }

        const dependent = await this.dependentsRepository.edit(id_dependent, {
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

        return dependent;
    }
}

export { EditDependentUseCase };