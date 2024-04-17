import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
                        type: "number",
                    },

                    {
                        name: "discount",
                        type: "number"
                    },

                    {
                        name: "fee",
                        type: "number",
                    },

                    {
                        name: "tax",
                        type: "number"
                    },

                    {
                        name: "due_date",
                        type: "Date"
                    },

                    {
                        name: "id_account",
                        type: "uuid"
                    },

                    {
                        name: "id_category",
                        type: "uuid"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("financial_posting");
    }

}
