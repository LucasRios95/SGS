import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddFkUnionHealthPlans1723234468715 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(
            "financial_posting",
            [
                new TableColumn({
                    name: "id_unionPlan",
                    type: "uuid",
                    isNullable: true
                }),

                new TableColumn({
                    name: "id_healthPlan",
                    type: "uuid",
                    isNullable: true
                })
            ]
        );

        await queryRunner.createForeignKey(
            "financial_posting",
            new TableForeignKey({
                columnNames: ["id_unionPlan"],
                referencedTableName: "union_plan",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL"
            }),
        );

        await queryRunner.createForeignKey(
            "financial_posting",
            new TableForeignKey({
                columnNames: ["id_healthPlan"],
                referencedTableName: "health_care_plan",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL"
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("financial_posting", "id_unionPlan");

        await queryRunner.dropForeignKey("financial_posting", "id_healthPlan");

        await queryRunner.dropColumns("financial_posting", ["id_unionPlan", "id_healthPlan"]);

    }
}
