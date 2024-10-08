import { BankAccount } from "modules/BankAccount/infra/typeorm/entities/BankAccount";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { v4 as uuidV4 } from "uuid";
import { Category } from "./Category";
import { ColumnNumericTransformer } from "config/ColumnNumericTransformer";
import { HealthCarePlan } from "modules/HealthCarePlan/infra/typeorm/entities/HealthCarePlan";
import { UnionPlan } from "modules/UnionPlans/infra/typeorm/entities/UnionPlan";

export enum PaymentStatus {
    PENDING = 'pending',
    PAID = 'paid',
    PARCIAL_PAYMENT = 'parcial_payment',
    OVERDUE = 'overdue'
}

@Entity()
export class FinancialPosting {

    @PrimaryColumn()
    id?: string;

    @Column()
    posting_type: string;

    @Column()
    description: string;


    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer()
    })
    value: number;


    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer(),
    })
    discount: number;


    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer(),
    })
    fee: number;


    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer(),
    })
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

    @Column({ type: 'enum', enum: PaymentStatus })
    payment_status: PaymentStatus;


    @ManyToOne(() => UnionPlan)
    @JoinColumn({ name: "id_unionPlan" })
    unionPlan: UnionPlan;

    @Column()
    id_unionPlan: string;

    @ManyToOne(() => HealthCarePlan)
    @JoinColumn({ name: "id_healthPlan" })
    healthCarePlan: HealthCarePlan;

    @Column()
    id_healthPlan: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}