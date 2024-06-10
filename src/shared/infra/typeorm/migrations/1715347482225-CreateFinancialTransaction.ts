import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateFinancialTransaction1715347482225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "financial_transaction",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "description",
                        type: "varchar",
                    },

                    {
                        name: "value",
                        type: "numeric",
                    },

                    {
                        name: "date",
                        type: "timestamp",
                        default: "now()"
                    },

                    {
                        name: "payment_type",
                        type: "enum",
                        enum: ["withdraw", "deposit", "transfer"]
                    },

                    {
                        name: "payment_method",
                        type: "enum",
                        enum: ["pix", "ted", "money", "credit", "debit"]
                    },

                    {
                        name: "id_account",
                        type: "uuid"
                    },

                    {
                        name: "id_financialPosting",
                        type: "uuid",
                        isNullable: true
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
            "financial_transaction",
            new TableForeignKey({
                columnNames: ["id_account"],
                referencedColumnNames: ["id"],
                referencedTableName: "bankAccount",
                onDelete: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "financial_transaction",
            new TableForeignKey({
                columnNames: ["id_financialPosting"],
                referencedColumnNames: ["id"],
                referencedTableName: "financial_posting",
                onDelete: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("financial_transaction", "id_account");
        await queryRunner.dropForeignKey("financial_transaction", "id_financialPosting");
        
        await queryRunner.dropTable("financial_transaction");
    }

}
