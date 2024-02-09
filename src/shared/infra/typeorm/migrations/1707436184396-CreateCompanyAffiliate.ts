import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompanyAffiliate1707436184396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "company_affiliate",
                columns: [
                    {
                        name: "id_company",
                        type: "uuid"
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
            "company_affiliate",
            new TableForeignKey({
                name: "FKCompanyAffiliate",
                columnNames: ["id_company"],
                referencedTableName: "company",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            }),
        );

        await queryRunner.createForeignKey(
            "company_affiliate",
            new TableForeignKey({
                name: "FKAffiliateCompany",
                columnNames: ["id_affiliate"],
                referencedTableName: "affiliate",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("company_affiliate");

        await queryRunner.dropForeignKey(
            "company_affiliate", 
            "FKCompanyAffiliate"
        );

        await queryRunner.dropForeignKey(
            "company_affiliate", 
            "FKAffiliateCompany"
        );

    }

}
