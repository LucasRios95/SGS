import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMedicalAgreement1725889274237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "medical_agreement",
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
                        name: "phone",
                        type: "varchar"
                    },

                    {
                        name: "email",
                        type: "varchar"
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
        await queryRunner.dropTable("medical_agreement");
    }
}
