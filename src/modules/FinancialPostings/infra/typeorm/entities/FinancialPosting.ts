import { BankAccount } from "modules/BankAccount/infra/typeorm/entities/BankAccount";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { v4 as uuidV4 } from "uuid";
import { Category } from "./Category";

@Entity()
export class FinancialPosting {

    @PrimaryColumn()
    id?: string;

    @Column()
    posting_type: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    discount: number;

    @Column()
    fee: number;

    @Column()
    tax: number;

    @Column()
    due_date: Date;

    @ManyToOne(() => BankAccount)
    @JoinColumn({ name: "id_account" })
    bankAccount: BankAccount;

    @Column()
    id_account: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "id_category" })
    category: Category;

    @Column()
    id_category: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    payment_status: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}