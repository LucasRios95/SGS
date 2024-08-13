import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUnionPlan1722022426597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "union_plan",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "payment_type",
                        type: "enum",
                        enum: ["monthly", "Quarterly", "Annualy"]
                    },

                    {
                        name: "value",
                        type: "numeric",
                    },

                    {
                        name: "status",
                        type: "enum",
                        enum: ["Active", "Inactive"]
                    },

                    {
                        name: "id_affiliate",
                        type: "uuid"
                    },

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            "union_plan",
            new TableForeignKey({
                columnNames: ["id_affiliate"],
                referencedColumnNames: ["id"],
                referencedTableName: "affiliate",
                onDelete: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("union_plan", "id_affiliate");

        await queryRunner.dropTable("union_plan");
    }
}
