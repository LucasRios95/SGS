import { Repository, getRepository } from "typeorm";

import { ICreateBankDto } from "modules/Banks/dtos/ICreateBankDTO";
import { IBanksRepository } from "modules/Banks/repositories/IBanksRepository";

import { Bank } from "../entities/Bank";



class BanksRepository implements IBanksRepository {
    private repository: Repository<Bank>

    constructor() {
        this.repository = getRepository(Bank);
    }

    async create({
        name,
        agency,
        station,
        phone,
        created_at
    }: ICreateBankDto): Promise<Bank> {
        const bank = await this.repository.create({
            name,
            agency,
            station,
            phone,
            created_at
        });

        this.repository.save(bank);

        return bank;
    }

    async list(): Promise<Bank[]> {
        const banks = await this.repository.find();

        return banks;
    }

    findByAgency(agency): Promise<Bank> {
        const bank = this.repository.findOne({ agency });

        return bank;
    }

    findById(id: string): Promise<Bank> {
        const bank = this.repository.findOne(id);

        return bank;
    }

}

export { BanksRepository };