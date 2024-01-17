import { inject, injectable } from "tsyringe";

import { IBanksRepository } from "modules/Banks/repositories/IBanksRepository";
import { BanksRepository } from "modules/Banks/infra/typeorm/repositories/BanksRepository";
import { Bank } from "modules/Banks/infra/typeorm/entities/Bank";

@injectable()
class ListBankUseCase {
    constructor(
        @inject("BanksRepository")
        private banksRepository: IBanksRepository
    ) {}

    async execute(): Promise<Bank[]>{
        const banks = await this.banksRepository.list();

        return banks
    }
}

export { ListBankUseCase }