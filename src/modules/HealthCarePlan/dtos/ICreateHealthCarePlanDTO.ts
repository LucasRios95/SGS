interface ICreateHealthCarePlanDTO {
    id?: string;
    description: string;
    pay_value: number;
    receive_value: number;
    id_medicalAgreement: string;
}

export { ICreateHealthCarePlanDTO };