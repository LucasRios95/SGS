import { ICreateAffiliateDto } from "modules/Affiliate/dtos/ICreateAffiliateDTO";
import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { Affiliate } from "../entities/Affiliate";
import { Repository, getRepository } from "typeorm";


class AffiliatesRepository implements IAffiliatesRepository {
    private repository: Repository<Affiliate>;

    constructor() {
        this.repository = getRepository(Affiliate);
    }

    async create({
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
    }: ICreateAffiliateDto): Promise<Affiliate> {
        const affiliate = await this.repository.create({
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

    async findById(id: string): Promise<Affiliate> {
        const affiliate = await this.repository.findOne({ id });

        return affiliate;

    }

    async findByCnpjCpf(cnpj_cpf: string): Promise<Affiliate> {
        const affiliate = await this.repository.findOne({ cnpj_cpf });

        return affiliate;
    }

    async update(
        id: string,
        {
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
        }: ICreateAffiliateDto
    ): Promise<void> {
        const affiliate = await this.repository.update(
            id,
            {
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
            }
        );
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete({id});

        if(!isDeleted) {
            return false;
        }

        return true;
    }
}

export { AffiliatesRepository };
