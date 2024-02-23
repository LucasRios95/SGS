import { inject, injectable } from "tsyringe";

import { Company } from "modules/Companies/infra/typeorm/entities/Company";
import { CompaniesRepository } from "../../infra/typeorm/repositories/CompaniesRepository";
import { ICompaniesRepository } from "modules/Companies/repositories/ICompaniesRepository";
import { AppError } from "shared/errors/AppError";


interface IRequest {
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    uf: string;
    cep: string;
    created_at: Date;
}

@injectable()
class CreateCompanyUseCase {
    constructor(
        @inject("CompaniesRepository")
        private companiesRepository: ICompaniesRepository
    ) {}

    async execute({
        name,
        cnpj,
        email,
        phone,
        address,
        city,
        uf,
        cep,
        created_at
    }: IRequest): Promise<Company> {
        const companyAlreadyExists = await this.companiesRepository.findByCnpj(cnpj);

        if (companyAlreadyExists) {
            throw new AppError("Company already exists");
            
        }

        const company = await this.companiesRepository.create({
            name,
            cnpj,
            email,
            phone,
            address,
            city,
            uf,
            cep,
            created_at
        });

        return company;
    }
}

export { CreateCompanyUseCase }