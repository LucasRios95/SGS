import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHealthCarePlan1722280501333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "health_care_plan",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "description",
                        type: "varchar"
                    },

                    {
                        name: "pay_value",
                        type: "numeric"
                    },

                    {
                        name: "receive_value",
                        type: "numeric"
                    },

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("health_care_plan");
    }
}
