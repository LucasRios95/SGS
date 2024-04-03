import { ICreateAffiliateDto } from "../dtos/ICreateAffiliateDTO";
import { Affiliate } from "../infra/typeorm/entities/Affiliate";
import { IEditAffiliateDto } from "../dtos/IEditAffiliateDto";

interface IAffiliatesRepository {
    create(data: ICreateAffiliateDto): Promise<Affiliate>;
    findById(id: string): Promise<Affiliate>;
    findByCnpjCpf(cnpj_cpf: string): Promise<Affiliate>;
    list(): Promise<Affiliate[]>;
    edit(id_affiliate: string, data: IEditAffiliateDto): Promise<Affiliate>;
    delete(id: string): Promise<boolean>;
    findByIds(ids: string[]): Promise<Affiliate[]>;
}

export { IAffiliatesRepository };