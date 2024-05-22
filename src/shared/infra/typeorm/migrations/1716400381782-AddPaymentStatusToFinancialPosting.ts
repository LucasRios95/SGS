import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPaymentStatusToFinancialPosting1716400381782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "financial_posting",
             new TableColumn({
                name: "payment_status",
                type: "enum",
                enum: ["pending", "paid", "parcial_payment", "overdue"],
             })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("financial_posting", "payment_status");
    }

}
