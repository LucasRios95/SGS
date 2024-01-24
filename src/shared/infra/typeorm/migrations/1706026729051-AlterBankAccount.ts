import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterBankAccount1706026729051 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "bankAccount",
            new TableColumn({
                name: "created_at",
                type: "timestamp",
                default: "now()",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("bankAccount", "created_at");
    }

}
