import { Company } from "modules/Companies/infra/typeorm/entities/Company";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"

@Entity("affiliate")
export class Affiliate {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    affiliateType: string;

    @Column()
    cnpj_cpf: string;
    
    @Column()
    crc: string;

    @Column()
    address: string;

    @Column()
    city: string

    @Column()
    uf: string;

    @Column()
    cep: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}