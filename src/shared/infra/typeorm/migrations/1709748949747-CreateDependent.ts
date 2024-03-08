import {MigrationInterface, QueryRunner, Table, TableForeignKey, Timestamp} from "typeorm";
import { Query } from "typeorm/driver/Query";

export class CreateDependent1709748949747 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "dependent",
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
                        name: "birth_date",
                        type: "timestamp"
                    },

                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },

                    {
                        name: "phone",
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
                        type: "boolean"
                    },

                    {
                        name: "gender",
                        type: "char"
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
            }),
        );

        await queryRunner.createForeignKey(
            "dependent",
            new TableForeignKey({
                columnNames: ["id_affiliate"],
                referencedColumnNames: ["id"],
                referencedTableName: "affiliate",
                onDelete: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("dependent", "id_affiliate");

        await queryRunner.dropTable("dependent");
    }

}
