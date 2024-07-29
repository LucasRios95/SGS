import { FinancialPosting } from "modules/FinancialPostings/infra/typeorm/entities/FinancialPosting";
import { BankAccount } from "modules/BankAccount/infra/typeorm/entities/BankAccount";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { ColumnNumericTransformer } from "config/ColumnNumericTransformer";

export enum PaymentType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
    TRANSFER = 'transfer'
}

export enum PaymentMethod {
    PIX = 'pix',
    TED = 'ted',
    MONEY = 'money',
    CREDIT = 'credit',
    DEBIT = 'debit'
}

@Entity()
export class FinancialTransaction {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;


    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer()
    })
    value: number;

    @Column()
    date: Date;

    @Column({ type: 'enum', enum: PaymentType })
    payment_type: PaymentType;

    @Column({ type: 'enum', enum: PaymentMethod })
    payment_method: PaymentMethod;

    @ManyToOne(() => BankAccount)
    @JoinColumn({ name: "id_account" })
    bankAccount: BankAccount;

    @Column()
    id_account: string;

    @ManyToOne(() => FinancialPosting)
    @JoinColumn({ name: "id_financialPosting" })
    financialPosting: FinancialPosting;

    @Column()
    id_financialPosting?: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

