
interface ICreateUnionPlanDto {
    id?: string;
    payment_type: string;
    value: number;
    status: string;
    id_affiliate: string;
    created_at: Date;
}

export { ICreateUnionPlanDto }; 