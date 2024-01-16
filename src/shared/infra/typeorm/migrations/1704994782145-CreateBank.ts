import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBank1704994782145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "bank",
                columns: [
                   {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                   },
                   
                   {
                        name: "name",
                        type: "varchar",
                   },

                   {
                        name: "agency",
                        type: "varchar",
                   },

                   {
                        name: "station",
                        type: "varchar",
                        isNullable: true,
                   },

                   {
                        name: "phone",
                        type: "varchar",
                   },

                   {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                   },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bank");
    }

}
