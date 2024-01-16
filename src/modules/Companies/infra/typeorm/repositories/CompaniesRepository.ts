import { getRepository, Repository } from "typeorm";

import { ICreateCompanyDto } from "modules/Companies/dtos/ICreateCompanyDTO";
import { ICompaniesRepository } from "modules/Companies/repositories/ICompaniesRepository";

import { Company } from "../entities/Company";

class CompaniesRepository implements ICompaniesRepository {
    private repository: Repository<Company>;

    constructor() {
        this.repository = getRepository(Company);
    }
    async create({
        name,
        cnpj,
        email,
        phone,
        address,
        city,
        uf,
        cep,
        created_at
    }: ICreateCompanyDto): Promise<Company> {
        const company = this.repository.create({
            name,
            cnpj,
            email,
            phone,
            address,
            city,
            uf,
            cep,
            created_at,
        });

        await this.repository.save(company);

        return company;
    }


    async list(): Promise<Company[]> {
        const companies = await this.repository.find();

        return companies;
    }

    async findByCnpj(cnpj: string): Promise<Company> {
        const company = await this.repository.findOne({cnpj});

        return company;
    }

    async findById(id: string): Promise<Company> {
        const company = await this.repository.findOne(id);

        return company;
    }

}

export { CompaniesRepository };