interface ICreateCompanyDto {
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    uf: string;
    cep: string;
    created_at: string;
}

export { ICreateCompanyDto };