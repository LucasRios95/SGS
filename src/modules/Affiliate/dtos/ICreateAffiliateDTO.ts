import { Company } from "modules/Companies/infra/typeorm/entities/Company";

interface ICreateAffiliateDto {
    id?: string;
    name: string;
    affiliateType: string;
    cnpj_cpf: string;
    crc: string;
    address: string;
    city: string;
    uf: string;
    cep: string;
    active: boolean;
    companies: Company[];
    created_at: string;
}

export { ICreateAffiliateDto };