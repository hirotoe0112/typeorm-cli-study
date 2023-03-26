import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1679814091170 implements MigrationInterface {
    name = 'Initial1679814091170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "study_record" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "study_record" ADD "date" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "study_record" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "study_record" ADD "date" TIMESTAMP`);
    }

}
