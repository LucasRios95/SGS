import { ColumnNumericTransformer } from "config/ColumnNumericTransformer";
import { MedicalAgreement } from "modules/MedicalAgreement/infra/typeorm/entities/MedicalAgreement";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

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

    @ManyToOne(() => MedicalAgreement)
    @JoinColumn({ name: "id_medicalAgreement" })
    medicalAgreement: MedicalAgreement

    @Column()
    id_medicalAgreement: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }

}