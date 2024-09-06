import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateAffiliateHealthCare1725563066312 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "affiliate_healthCarePlan",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "id_affiliate",
                        type: "uuid"
                    },

                    {
                        name: "id_healthCarePlan",
                        type: "uuid"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            "affiliate_healthCarePlan",
            new TableForeignKey({
                name: "FKAffiliateHealthCare",
                columnNames: ["id_affiliate"],
                referencedTableName: "affiliate",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );

        await queryRunner.createForeignKey(
            "affiliate_healthCarePlan",
            new TableForeignKey({
                name: "FKHealthCareAffiliate",
                columnNames: ["id_healthCarePlan"],
                referencedTableName: "health_care_plan",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("affiliate_healthCarePlan");

        await queryRunner.dropForeignKey(
            "affiliate_healthCarePlan",
            "FKCompanyAffiliate"
        );

        await queryRunner.dropForeignKey(
            "affiliate_healthCarePlan",
            "FKAffiliateHealthCare"
        );
    }

}
