import { inject, injectable } from "tsyringe";

import { Company } from "modules/Companies/infra/typeorm/entities/Company";
import { ICompaniesRepository } from "modules/Companies/repositories/ICompaniesRepository";
import { CompaniesRepository } from "modules/Companies/infra/typeorm/repositories/CompaniesRepository";


@injectable()
class ListCompaniesUseCase {
    constructor(
        @inject("CompaniesRepository")
        private companiesRepository: ICompaniesRepository
    ) {}
    
    async execute(): Promise<Company[]> {
        const companies = await this.companiesRepository.list();

        return companies;
    }
}

export { ListCompaniesUseCase };

