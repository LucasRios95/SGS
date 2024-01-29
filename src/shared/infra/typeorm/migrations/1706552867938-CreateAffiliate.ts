import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAffiliate1706552867938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "affiliate",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "name",
                        type: "varchar"
                    },

                    {
                        name: "affiliate_type",
                        type: "enum",
                        default: "cpf"
                    },

                    {
                        name: "cnpj_cpf",
                        type: "varchar"
                    },

                    {
                        name: "crc",
                        type: "varchar"
                    },

                    {
                        name: "address",
                        type: "varchar"
                    },

                    {
                        name: "city",
                        type: "varchar"
                    },

                    {
                        name: "uf",
                        type: "varchar"
                    },

                    {
                        name: "cep",
                        type: "varchar"
                    },
                    
                    {
                        name: "active",
                        type: "boolean",
                        default: true
                    },

                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("affiliate");
    }

}
