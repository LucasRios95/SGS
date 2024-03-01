import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { Company } from "modules/Companies/infra/typeorm/entities/Company";
import { ICompaniesRepository } from "modules/Companies/repositories/ICompaniesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id_affiliate: string[];
    id_company: string;
}

@injectable()
class CreateCompanyAffiliateUseCase {
    constructor(
        @inject("CompaniesRepository")
        private companiesRepository: ICompaniesRepository,

        @inject("AffiliatesRepository")
        private affiliatesRepository: IAffiliatesRepository
    ) {}

    async execute({id_affiliate, id_company}: IRequest): Promise<Company> {
        const companyExists = await this.companiesRepository.findById(id_company);


        if (!companyExists) {
            throw new Error("Company does not exists");
        }

        const affiliates = await this.affiliatesRepository.findByIds(id_affiliate);

        companyExists.affiliates = affiliates;
        
        await this.companiesRepository.create(companyExists);

        return companyExists;
              
    }
}

export { CreateCompanyAffiliateUseCase };