import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAffiliateUseCase {
    constructor(
        @inject("AffiliatesRepository")
        private affiliateRepository: IAffiliatesRepository
    ) {}

    async execute() {  
        const affiliates = await this.affiliateRepository.list();

        return affiliates;
      }
} 

export { ListAffiliateUseCase }



