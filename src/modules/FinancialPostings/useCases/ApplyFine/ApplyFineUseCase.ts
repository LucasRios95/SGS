import { FinancialPosting } from "modules/FinancialPostings/infra/typeorm/entities/FinancialPosting";
import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { DayjsDateProvider } from "shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { inject, injectable } from "tsyringe";


@injectable()
class ApplyFineUseCase {
    constructor(
        @inject("FinancialPostingRepository")
        private financialPostingRepository: IFinancialPostingRepository,
        @inject("DayjsDateProvider")
        private dateProvider: DayjsDateProvider
    ) { }

    async execute(): Promise<FinancialPosting[]> {
        const financialPostings = await this.financialPostingRepository.list();
        const dateNow = await this.dateProvider.dateNow()

        for (const financialPosting of financialPostings) {
            let delay = await this.dateProvider.compareInDays(dateNow, financialPosting.due_date);

            console.log(delay)

            if (delay > 0 && financialPosting.payment_status === "overdue") {
                const fineAmount = (financialPosting.value * (financialPosting.fee / 100)) * delay;

                await this.financialPostingRepository.edit(financialPosting.id, {
                    id: financialPosting.id,
                    description: financialPosting.description,
                    posting_type: financialPosting.posting_type,
                    discount: financialPosting.discount,
                    due_date: financialPosting.due_date,
                    fee: financialPosting.fee,
                    value: financialPosting.value + fineAmount,
                    tax: financialPosting.tax,
                    id_account: financialPosting.id_account,
                    id_category: financialPosting.id_category,
                    payment_status: financialPosting.payment_status,
                });
            }

        }

        return financialPostings;
    }
}