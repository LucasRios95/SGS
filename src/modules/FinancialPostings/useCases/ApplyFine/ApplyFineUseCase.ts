import { FinancialPosting } from "modules/FinancialPostings/infra/typeorm/entities/FinancialPosting";
import { IFinancialPostingRepository } from "modules/FinancialPostings/repositories/IFinancialPostingRepository";
import { IDateProvider } from "shared/container/providers/DateProvider/IDateProvider";
import { DayjsDateProvider } from "shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { inject, injectable } from "tsyringe";


@injectable()
class ApplyFineUseCase {
    constructor(
        @inject("FinancialPostingRepository")
        private financialPostingRepository: IFinancialPostingRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) { }

    async execute(): Promise<FinancialPosting[]> {
        const financialPostings = await this.financialPostingRepository.list();
        const dateNow = this.dateProvider.dateNow();

        for (const financialPosting of financialPostings) {
            let delay = this.dateProvider.compareInDays(financialPosting.due_date, dateNow);

            if (delay > 0 && (financialPosting.payment_status === "pending" || financialPosting.payment_status === "overdue")) {
                const fineAmount = ((financialPosting.value * (financialPosting.fee / 100)) * (delay));

                const updatedValue = Number(financialPosting.value) + fineAmount;

                await this.financialPostingRepository.edit(
                    financialPosting.id,
                    {
                        id: financialPosting.id,
                        description: financialPosting.description,
                        posting_type: financialPosting.posting_type,
                        discount: financialPosting.discount,
                        due_date: financialPosting.due_date,
                        fee: financialPosting.fee,
                        value: Number(updatedValue.toFixed(2)),
                        tax: financialPosting.tax,
                        id_account: financialPosting.id_account,
                        id_category: financialPosting.id_category,
                        payment_status: "overdue",
                    }
                );
            }
        }

        return financialPostings;
    }
}

export { ApplyFineUseCase };