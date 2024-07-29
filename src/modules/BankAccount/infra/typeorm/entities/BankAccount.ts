import { ColumnNumericTransformer } from "config/ColumnNumericTransformer";
import { Bank } from "modules/Banks/infra/typeorm/entities/Bank";
import { Company } from "modules/Companies/infra/typeorm/entities/Company";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("bankAccount")
export class BankAccount {
    @PrimaryColumn()
    id?: string;

    @Column()
    account_number: string;

    @Column()
    digit: string;

    @Column()
    our_number: string;

    @Column()
    message: string;

    @ManyToOne(() => Bank)
    @JoinColumn({ name: "id_bank" })
    bank: Bank;

    @Column()
    id_bank: string;

    @ManyToOne(() => Company)
    @JoinColumn({ name: "id_company" })
    company: Company;

    @Column()
    id_company: string;

    @CreateDateColumn()
    created_at: Date;

    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer(),
    })
    balance: number;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}