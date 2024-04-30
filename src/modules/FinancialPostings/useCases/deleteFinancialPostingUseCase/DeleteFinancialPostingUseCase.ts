import { inject, injectable } from "tsyringe";

import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { AppError } from "shared/errors/AppError";

@injectable()
class DeleteFinancialPostingUseCase {
    constructor(
        @inject("FinancialPostingRepository")
        private financialPostingRepository: IFinancialPostingRepository
    ) { }

    async execute(id: string): Promise<boolean> {
        const isDeleted = await this.financialPostingRepository.delete(id);

        if (!isDeleted) {
            throw new AppError("Financial posting isn't deleted", 500);
            
            return false;
        }

        return true;
    }
}

export { DeleteFinancialPostingUseCase };