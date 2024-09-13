import { FinancialPosting } from "modules/FinancialPostings/infra/typeorm/entities/FinancialPosting";
import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListFinancialPostingUseCase {
    constructor(
        @inject("FinancialPostingRepository")
        private financialPostingRepository: IFinancialPostingRepository
    ) { }

    async execute(): Promise<FinancialPosting[]> {
        const financialPostings = await this.financialPostingRepository.list();

        return financialPostings;
    }
}

export { ListFinancialPostingUseCase };