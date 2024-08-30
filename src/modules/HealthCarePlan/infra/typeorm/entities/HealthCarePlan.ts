import { ColumnNumericTransformer } from "config/ColumnNumericTransformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

import { v4 as uuidV4 } from "uuid";

@Entity()
export class HealthCarePlan {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string

    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer()
    })
    pay_value: number;

    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer()
    })
    receive_value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }

}