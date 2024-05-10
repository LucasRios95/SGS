import { FinancialPosting } from "modules/FinancialPostings/infra/typeorm/entities/FinancialPosting";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
export class FinancialTransaction {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    date: Date;

    @Column()
    payment_type: string;

    @Column()
    payment_method: string;

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