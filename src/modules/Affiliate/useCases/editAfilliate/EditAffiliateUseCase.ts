import { Affiliate } from "modules/Affiliate/infra/typeorm/entities/Affiliate";
import { AffiliatesRepository } from "modules/Affiliate/infra/typeorm/repositories/AffiliatesRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id?: string;
    name?: string;
    affiliateType?: string;
    cnpj_cpf?: string;
    crc?: string;
    address?: string;
    city?: string;
    uf?: string;
    cep?: string;
    active?: boolean;
    created_at?: Date;
}


@injectable()
class EditAffiliateUseCase {
    constructor(
        @inject("AffiliatesRepository")
        private affiliatesRepository: AffiliatesRepository
    ) { }

    async execute(id_affiliate: string, {
        id,
        name,
        affiliateType,
        cnpj_cpf,
        crc,
        address,
        city,
        uf,
        cep,
        active,
        created_at,
    }: IRequest): Promise<Affiliate> {
        const affiliateExists = await this.affiliatesRepository.findById(id_affiliate);

        if (!affiliateExists) {
            throw new AppError("Affiliate does not exists in this database", 404);
        }

        const affiliate = await this.affiliatesRepository.edit(id_affiliate, {
            id,
            name,
            affiliateType,
            cnpj_cpf,
            crc,
            address,
            city,
            uf,
            cep,
            active,
            created_at,
        });

        return affiliate;
    }
}

export { EditAffiliateUseCase };