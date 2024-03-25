import { Dependent } from "modules/Affiliate/infra/typeorm/entities/Dependent";
import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { IDependentsRepository } from "modules/Affiliate/repositories/IDependentsRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
class ListDependentByAffiliateUseCase {
    constructor(
        @inject("DependentsRepository")
        private dependentsRepository: IDependentsRepository,

        @inject("AffiliatesRepository")
        private affiiliatesRepository: IAffiliatesRepository,
    ) {}

    async execute(id_affiliate: string): Promise<Dependent[]> {
        const affiliate = await this.affiiliatesRepository.findById(id_affiliate);

        if( !affiliate ) {
            throw new AppError("Afilliate does not exists");
        }

        const depedentsList = await this.dependentsRepository.listByAffiliate(affiliate.id);

        return depedentsList;
    }
}

export { ListDependentByAffiliateUseCase };