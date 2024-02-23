import { inject, injectable } from "tsyringe";

import { Bank } from "modules/Banks/infra/typeorm/entities/Bank";
import { IBanksRepository } from "modules/Banks/repositories/IBanksRepository";
import { BanksRepository } from "modules/Banks/infra/typeorm/repositories/BanksRepository";
import { AppError } from "shared/errors/AppError";

interface IRequest {
    name: string;
    agency: string;
    station: string;
    phone: string;
    created_at: string;
}

@injectable()
class CreateBankUseCase {
    constructor(
        @inject("BanksRepository")
        private bankRepository: IBanksRepository
    ) {}

    async execute({
        name,
        agency,
        station,
        phone,
        created_at
    }: IRequest): Promise<Bank> {
        const bankAlreadyExists= await this.bankRepository.findByAgency(agency);

        if (bankAlreadyExists) {
            throw new AppError("Bank already exists");
        }

        const bank = await this.bankRepository.create({
            name,
            agency,
            station,
            phone,
            created_at,
        });

        return bank;
    }
}

export {CreateBankUseCase};