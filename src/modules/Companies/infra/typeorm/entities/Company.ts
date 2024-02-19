import { Affiliate } from "modules/Affiliate/infra/typeorm/entities/Affiliate";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("company")
export class Company {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    cnpj: string;

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

    @ManyToMany(() => Affiliate)
    @JoinTable({
        name: "affiliate_company",
        joinColumns: [{ name: "id_company" }],
        inverseJoinColumns: [{ name: "id_affiliate" }],
    })
    affiliates: Affiliate[];

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}