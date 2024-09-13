import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
export class MedicalAgreement {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @Column()
    cep: string;

    @Column()
    phone: string;


    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}