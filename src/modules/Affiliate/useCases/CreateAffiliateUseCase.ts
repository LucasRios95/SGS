import { inject, injectable } from "tsyringe";
import { IAffiliatesRepository } from "../repositories/IAffiliatesRepository";
import { Affiliate } from "../infra/typeorm/entities/Affiliate";



interface IRequest {
    name: string;
    affiliateType: string;
    cnpj_cpf: string;
    crc: string;
    address: string;
    city: string;
    uf: string;
    cep: string;
    active: boolean;
    created_at: string;
}

@injectable()
class CreateAffiliateUseCase {
    constructor(
        @inject("AffiliatesRepository")
        private affiliatesRepository: IAffiliatesRepository
    ) { }

    async execute({
        name,
        affiliateType,
        cnpj_cpf,
        crc,
        address,
        city,
        uf,
        cep,
        active,
        created_at
    }: IRequest): Promise<Affiliate> {

        const affiliateAlreadyExists = this.affiliatesRepository.findByCnpjCpf(cnpj_cpf);

        if(affiliateAlreadyExists) {
            throw new Error("Affiliate already exists!");
        }

        const affiliate = await this.affiliatesRepository.create({
            name,
            affiliateType,
            cnpj_cpf,
            crc,
            address,
            city,
            uf,
            cep,
            active,
            created_at
        });
        

        return affiliate;
    }
}

export { CreateAffiliateUseCase };