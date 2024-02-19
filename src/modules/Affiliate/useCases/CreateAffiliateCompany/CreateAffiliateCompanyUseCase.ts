import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { ICompaniesRepository } from "modules/Companies/repositories/ICompaniesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id_affiliate: string;
    id_company: string;
}

@injectable()
class CreateAffiliateCompanyUseCase {
    constructor(
        @inject("CompaniesRepository")
        private companiesRepository: ICompaniesRepository,

        @inject("AffiliatesRepository")
        private affiliatesRepository: IAffiliatesRepository
    ) {}

    async execute({id_affiliate, id_company}: IRequest): Promise<void> {
        
    }
}

export { CreateAffiliateCompanyUseCase };