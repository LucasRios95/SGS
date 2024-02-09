interface ICreateAffiliateDto {
    name: string;
    affiliateType: string;
    cnpjCpf: string;
    crc: string;
    address: string;
    city: string;
    uf: string;
    cep: string;
    active: boolean;
    created_at: string;
}

export { ICreateAffiliateDto };