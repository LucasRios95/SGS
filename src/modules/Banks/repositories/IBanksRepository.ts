import { ICreateBankDto } from "../dtos/ICreateBankDTO";
import { Bank } from "../infra/typeorm/entities/Bank";


interface IBanksRepository {
    create(data: ICreateBankDto): Promise<Bank>;
    list(): Promise<Bank[]>;
    findByAgency(agency: string): Promise<Bank>;
    findById(id: string): Promise<Bank>;
}

export { IBanksRepository };