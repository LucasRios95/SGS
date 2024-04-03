import { DependentsRepository } from "modules/Affiliate/infra/typeorm/repositories/DependentsRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteDependentUseCase {
    constructor(
        @inject("DependentsRepository")
        private dependentsRepository: DependentsRepository
    ) {}

    async execute(id: string): Promise<boolean> { 
        const dependentExists = await this.dependentsRepository.findById(id);
        
        if (!dependentExists) {
            throw new AppError("Dependent does not exists", 404);
        }

        const isDeleted = await this.dependentsRepository.delete(id);

        return isDeleted;
    } 
}

export { DeleteDependentUseCase };