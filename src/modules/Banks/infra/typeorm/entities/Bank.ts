import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("bank")
export class Bank {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    agency: string;

    @Column()
    station: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}