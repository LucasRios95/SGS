import { Column, CreateDateColumn, Entity, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";

import { v4 as uuidV4 } from "uuid";
import { Affiliate } from "./Affiliate";

@Entity()
export class Dependent {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @CreateDateColumn()
    birth_date: Date;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @Column()
    cep: string;

    @Column()
    active: boolean;

    @Column()
    gender: string;

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
