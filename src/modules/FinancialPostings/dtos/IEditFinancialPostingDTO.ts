
interface IEditFinancialPostingDto {
    id?: string;
    posting_type?: string;
    description?: string;
    value?: number;
    discount?: number;
    fee?: number;
    tax?: number;
    due_date?: Date;
    id_account?: string;
    id_category?: string;
    payment_status?: string
}

export { IEditFinancialPostingDto };