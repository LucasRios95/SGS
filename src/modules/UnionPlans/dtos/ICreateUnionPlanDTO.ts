
interface ICreateUnionPlanDto {
    id?: string;
    payment_type: string;
    value: number;
    status: string;
    id_affiliate: string;
    id_financialPosting: string;
    created_At: Date;
}

export { ICreateUnionPlanDto };