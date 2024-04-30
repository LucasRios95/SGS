import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddCreatedAtToFinancialPosting1714153909915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "financial_posting",
            new TableColumn({
                name: "created_at",
                type: "timestamp",
                default: "now()"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("financial_posting", "created_at");
    }

}
