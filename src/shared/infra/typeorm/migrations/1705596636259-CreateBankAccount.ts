import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { RelationIdAttribute } from "typeorm/query-builder/relation-id/RelationIdAttribute";

export class CreateBankAccount1705596636259 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "bankAccount",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "account_number",
                        type: "varchar"
                    },

                    {
                        name: "digit",
                        type: "char"
                    },

                    {
                        name: "our_number",
                        type: "varchar",
                        isNullable: true
                    },

                    {
                        name: "message",
                        type: "text",
                    },

                    {
                        name: "id_company",
                        type: "uuid",
                    },

                    {
                        name: "id_bank",
                        type: "uuid",
                    },
                ]
            })
        );

        await queryRunner.createForeignKey(
            "bankAccount",
            new TableForeignKey({
                name: "FK_bankAccount",
                columnNames: ["id_company"],
                referencedColumnNames: ["id"],
                referencedTableName: "company",
                onDelete: "SET NULL",
            }),
        );

        await queryRunner.createForeignKey(
            "bankAccount",
            new TableForeignKey({
                name: "FK_accountBank",
                columnNames: ["id_bank"],
                referencedColumnNames: ["id"],
                referencedTableName: "bank",
                onDelete: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bankAccount");
        
        await queryRunner.dropForeignKey(
            "bankAccount",
            "FK_bankAccount"
        );

        await queryRunner.dropForeignKey(
            "bankAccount",
            "FK_accountBank"
        );
    }
}
