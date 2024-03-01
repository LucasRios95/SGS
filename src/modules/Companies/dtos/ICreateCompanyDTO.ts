import { Affiliate } from "modules/Affiliate/infra/typeorm/entities/Affiliate";

interface ICreateCompanyDto {
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    uf: string;
    cep: string;
    affiliates?: Affiliate[];
    created_at: Date;
    id?: string;
}

export { ICreateCompanyDto };