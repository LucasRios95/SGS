import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAffiliateUseCase {
    constructor(
        @inject("AffiliateRepository")
        private affiliateRepository: IAffiliatesRepository
    ) {}

    async execute() {    }
} 

export { ListAffiliateUseCase }



