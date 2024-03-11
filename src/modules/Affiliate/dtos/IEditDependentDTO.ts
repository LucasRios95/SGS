
interface IEditDependentDto {
    name?: string;
    birth_date?: Date;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    uf?: string;
    cep?: string;
    active?: boolean;
    gender?: string;
    updated_at: Date;
}

export { IEditDependentDto };