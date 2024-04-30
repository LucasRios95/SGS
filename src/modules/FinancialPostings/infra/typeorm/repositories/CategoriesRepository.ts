import { ICategoriesRepository } from "modules/FinancialPostings/repositories/ICategoriesRepository";
import { Repository, getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { ICreateCategoryDto } from "modules/FinancialPostings/dtos/ICategoryDTO";



class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({
        id,
        description,
        created_at
    }: ICreateCategoryDto): Promise<Category> {
        const category = this.repository.create({
            id,
            description,
            created_at
        });

        await this.repository.save(category);

        return category;
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find()

        return categories;
    }

    async findByDescription(description: string): Promise<Category> {
        const category = await this.repository.findOne({description});

        return category;
    }

    async findById(id: string): Promise<Category> {
        const category = await this.repository.findOne(id);

        return category;
    }
}

export { CategoriesRepository };