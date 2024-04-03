import { AffiliatesRepository } from "modules/Affiliate/infra/typeorm/repositories/AffiliatesRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteAffiliateUseCase {
    constructor(
        @inject(AffiliatesRepository)
        private affiliatesRepository: AffiliatesRepository
    ) {}

    async execute(id: string): Promise<boolean> {
        const affiliateExists = await this.affiliatesRepository.findById(id);

        if (!affiliateExists) {
            throw new AppError("Affiliate does not exists", 404);
        }

        const isDeleted = await this.affiliatesRepository.delete(id);

        return isDeleted
    }
}

export { DeleteAffiliateUseCase };