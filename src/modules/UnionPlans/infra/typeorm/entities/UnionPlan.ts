import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ColumnNumericTransformer } from "config/ColumnNumericTransformer";

import { Affiliate } from "modules/Affiliate/infra/typeorm/entities/Affiliate";

import { v4 as uuidV4 } from "uuid";

@Entity()
export class UnionPlan {

    @PrimaryColumn()
    id?: string;

    @Column()
    payment_type: string;

    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer()
    })
    value: number;

    @Column()
    status: string;

    @ManyToOne(() => Affiliate)
    @JoinColumn({ name: "id_affiliate" })
    affiliate: Affiliate;

    @Column()
    id_affiliate: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

