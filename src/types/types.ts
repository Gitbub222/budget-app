export interface EXPENSE {
    description: string,
    date: string,
    amount: number
}

export enum EXPENSE_FIELD {
    DESCRIPTION = 'description',
    DATE = 'date',
    AMOUNT = 'amount'
}