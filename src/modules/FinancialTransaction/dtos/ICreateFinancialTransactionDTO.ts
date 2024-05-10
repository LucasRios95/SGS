interface ICreateFinancialTransactionDto {
    id?: string;
    description: string;
    value: number;
    date: Date;
    payment_type: string;
    payment_method: string;
    id_financialPosting?: string;
    created_at: Date;
}

export { ICreateFinancialTransactionDto };