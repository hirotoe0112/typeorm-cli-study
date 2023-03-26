import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1679808898602 implements MigrationInterface {
    name = 'Initial1679808898602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "material" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0343d0d577f3effc2054cbaca7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "study_record" ("id" SERIAL NOT NULL, "minutes" integer NOT NULL, "user_id" integer, "material_id" integer, CONSTRAINT "PK_df4e710a6ba302ae3ab0cba6786" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "study_record" ADD CONSTRAINT "FK_21fed8754ccbfab8b28d4e3fb23" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "study_record" ADD CONSTRAINT "FK_a2687c1d098666eaad59f3ad5d1" FOREIGN KEY ("material_id") REFERENCES "material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "study_record" DROP CONSTRAINT "FK_a2687c1d098666eaad59f3ad5d1"`);
        await queryRunner.query(`ALTER TABLE "study_record" DROP CONSTRAINT "FK_21fed8754ccbfab8b28d4e3fb23"`);
        await queryRunner.query(`DROP TABLE "study_record"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "material"`);
    }

}
