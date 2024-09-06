import { Affiliate } from "modules/Affiliate/infra/typeorm/entities/Affiliate";
import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { IHealthCarePlanRepository } from "modules/HealthCarePlan/repositories/IHealthCarePlanRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id_affiliate: string;
    id_healthCarePlan: string[];
}


@injectable()
class CreateHealthCareAffiliateUseCase {
    constructor(
        @inject("AffiliatesRepository")
        private affiliatesRepository: IAffiliatesRepository,

        @inject("HealthCarePlanRepository")
        private healthCarePlanRepository: IHealthCarePlanRepository
    ) { }

    async execute({ id_affiliate, id_healthCarePlan }: IRequest): Promise<Affiliate> {
        const affiliateExists = await this.affiliatesRepository.findById(id_affiliate);

        if (!affiliateExists) {
            throw new AppError("Affiliate does not exists");
        }

        const healthCarePlans = await this.healthCarePlanRepository.findByIds(id_healthCarePlan);

        affiliateExists.healthCarePlans = healthCarePlans;

        const afilliate = await this.affiliatesRepository.create(affiliateExists);

        return afilliate;

    }
}

export { CreateHealthCareAffiliateUseCase };