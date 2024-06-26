import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

import { v4 as uuidV4 } from "uuid";

@Entity()
export class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}