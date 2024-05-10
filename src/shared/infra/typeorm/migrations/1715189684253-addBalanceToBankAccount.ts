import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addBalanceToBankAccount1715189684253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "bankAccount",
            new TableColumn({
                name: "balance",
                type: "numeric"
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("bankAccount", "balance");
    }

}
