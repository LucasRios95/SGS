import { ICreateCategoryDto } from "modules/FinancialPostings/dtos/ICategoryDTO";
import { Category } from "modules/FinancialPostings/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "modules/FinancialPostings/repositories/ICategoriesRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateCateogryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({
        description,
        created_at
    }: ICreateCategoryDto): Promise<Category> {
        const categoryAlreadyExists = await this.categoriesRepository.findByDescription(description);
        
        if (categoryAlreadyExists) {
            throw new AppError("Category already exists");
        }

        const category = await this.categoriesRepository.create({
            description,
            created_at
        });

        return category;
    }
}

export { CreateCateogryUseCase };