import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddAffiliateTypeColumn1707256607935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "affiliate", 
            new TableColumn({
                name: "affiliateType",
                type: "enum",
                enum: ["cnpj", "cpf"],
            }),
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("affiliate", "affiliateType");
    }

}
