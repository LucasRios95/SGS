import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateFinancialPosting1713277791941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "financial_posting",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "posting_type",
                        type: "enum",
                        enum: ["pay", "receive"]
                    },

                    {
                        name: "description",
                        type: "varchar"
                    },

                    {
                        name: "value",
                        type: "numeric",
                    },

                    {
                        name: "discount",
                        type: "numeric"
                    },

                    {
                        name: "fee",
                        type: "numeric",
                    },

                    {
                        name: "tax",
                        type: "numeric"
                    },

                    {
                        name: "due_date",
                        type: "Date"
                    },

                    {
                        name: "id_account",
                        type: "uuid"
                    },

                ]
            })
        );

        await queryRunner.createForeignKey(
            "financial_posting",
            new TableForeignKey({
                columnNames: ["id_account"],
                referencedColumnNames: ["id"],
                referencedTableName: "bankAccount",
                onDelete: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("financial_posting", "id_account");

        await queryRunner.dropTable("financial_posting");
    }

}
