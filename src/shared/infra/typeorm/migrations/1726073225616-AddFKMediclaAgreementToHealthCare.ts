import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddFKMediclaAgreementToHealthCare1726073225616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "health_care_plan",
            new TableColumn({
                name: "id_medicalAgreement",
                type: "uuid",
            })
        );

        await queryRunner.createForeignKey(
            "health_care_plan",
            new TableForeignKey({
                columnNames: ["id_medicalAgreement"],
                referencedTableName: "medical_agreement",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("health_care_plan", "id_medicalAgreement");

        await queryRunner.dropColumn("health_care_plan", "id_medicalAgreement");
    }
}
