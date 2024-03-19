import { Dependent } from "modules/Affiliate/infra/typeorm/entities/Dependent";
import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { IDependentsRepository } from "modules/Affiliate/repositories/IDependentsRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
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
class CreateDependentUseCase {
    constructor(
        @inject("DependentsRepository")
        private dependentRepository: IDependentsRepository,

        @inject("AffiliatesRepository")
        private affiliatesRepository: IAffiliatesRepository
    ) { }

    async execute({
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
    }: IRequest): Promise<Dependent> {

        const affiliate = await this.affiliatesRepository.findById(id_affiliate);

        if (!affiliate) {
            throw new AppError("Affiliate does not exists in company database", 400);
        }

        const dependent = await this.dependentRepository.create({
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

export { CreateDependentUseCase };