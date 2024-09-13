interface ICreateMedicalAgreementDTO {
    id: string;
    name: string
    address: string;
    city: string;
    uf: string;
    cep: string;
    phone: string;
    email: string;
    created_at: Date;
}

export { ICreateMedicalAgreementDTO };