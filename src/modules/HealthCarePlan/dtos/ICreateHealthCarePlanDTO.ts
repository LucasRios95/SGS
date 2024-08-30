interface ICreateHealthCarePlanDTO {
    id?: string;
    description: string;
    pay_value: number;
    receive_value: number;
    created_at: Date;
}

export { ICreateHealthCarePlanDTO };