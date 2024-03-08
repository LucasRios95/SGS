
interface ICreateDependentDto {
    id?: string;
    name: string;
    birth_date: Date;
    email: string;
    phone: string;
    address: string;
    city: string;
    uf: string;
    cep: string;
    active: boolean;
    gender: string;
    id_affiliate: string;
    created_at: Date;
}

export { ICreateDependentDto };