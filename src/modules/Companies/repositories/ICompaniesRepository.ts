import { ICreateCompanyDto } from "../dtos/ICreateCompanyDTO";
import { Company } from "../infra/typeorm/entities/Company";

interface ICompaniesRepository {
    create(data: ICreateCompanyDto): Promise<Company>;
    list(): Promise<Company[]>;
    findByCnpj(cnpj: string): Promise<Company>;
    findById(id: string): Promise<Company>;
    findByIds(ids: string[]): Promise<Company[]>;
}

export { ICompaniesRepository };