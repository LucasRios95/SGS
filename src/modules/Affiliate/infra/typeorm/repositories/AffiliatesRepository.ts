import { ICreateAffiliateDto } from "modules/Affiliate/dtos/ICreateAffiliateDTO";
import { IAffiliatesRepository } from "modules/Affiliate/repositories/IAffiliatesRepository";
import { Affiliate } from "../entities/Affiliate";
import { Repository, getRepository } from "typeorm";
import { AppError } from "shared/errors/AppError";
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
        const affiliate = this.repository.create({
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

        await this.repository.save(affiliate);

        return affiliate;
    }

    async findById(id: string): Promise<Affiliate> {
        const affiliate = await this.repository.findOne({ id });

        return affiliate;

    }

    async edit(id_affiliate: string, {
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
    }): Promise<Affiliate> {
        const editedAffiliate = await this.repository.save({
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

        return editedAffiliate;
    }

    async findByCnpjCpf(cnpj_cpf: string): Promise<Affiliate> {
        const affiliate = await this.repository.findOne({ cnpj_cpf });

        return affiliate;
    }

    async list(): Promise<Affiliate[]> {
        const affiliates = await this.repository.find();

        return affiliates
    }

    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.repository.delete({ id });

        if (!isDeleted) {
            return false;
        }

        return true;
    }

    async findByIds(ids: string[]): Promise<Affiliate[]> {
        const allAffiliates = await this.repository.findByIds(ids);

        return allAffiliates;
    }
}

export { AffiliatesRepository };
