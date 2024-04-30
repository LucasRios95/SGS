import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addCategoryFKToFinancialPosting1713446641024 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "financial_posting",
            new TableColumn({
                name: "id_category",
                type: "uuid",
            })
        );

        await queryRunner.createForeignKey(
            "financial_posting",
            new TableForeignKey({
                columnNames: ["id_category"],
                referencedColumnNames: ["id"],
                referencedTableName: "category",
                onDelete: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("financial_posting", "id_category");

        await queryRunner.dropColumn("financial_posting", "id_category");
    }

}
