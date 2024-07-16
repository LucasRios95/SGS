interface IEditBankAccountDto {
    id: string;
    account_number?: string;
    digit?: string;
    our_number?: string;
    message?: string;
    id_bank?: string;
    id_company?: string;
    created_at?: string;
    balance: number;
}

export { IEditBankAccountDto }