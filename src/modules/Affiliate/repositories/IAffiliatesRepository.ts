import { ICreateAffiliateDto } from "../dtos/ICreateAffiliateDTO";
import { Affiliate } from "../infra/typeorm/entities/Affiliate";

interface IAffiliatesRepository {
    create(data: ICreateAffiliateDto): Promise<Affiliate>;
    findById(id: string): Promise<Affiliate>;
    findByCnpjCpf(cnpj_cpf: string): Promise<Affiliate>;
    update(id: string, data: ICreateAffiliateDto ): Promise<void>;
    delete(id: string): Promise<boolean>;
    findByIds(ids: string[]): Promise<Affiliate[]>;
}

export { IAffiliatesRepository };