import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1679813729460 implements MigrationInterface {
  name = "Initial1679813729460";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "study_record" ADD "date" TIMESTAMP`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "study_record" DROP COLUMN "date"`);
  }
}
