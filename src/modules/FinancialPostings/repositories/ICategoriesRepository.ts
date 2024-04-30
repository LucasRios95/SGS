import { ICreateCategoryDto } from "../dtos/ICategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
    create(data: ICreateCategoryDto): Promise<Category>;
    list(): Promise<Category[]>;
    findByDescription(description: string): Promise<Category>;
    findById(id: string): Promise<Category>;
}

export { ICategoriesRepository };