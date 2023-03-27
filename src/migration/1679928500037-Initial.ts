import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1679928500037 implements MigrationInterface {
    name = 'Initial1679928500037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "follow" ("from" integer NOT NULL, "to" integer NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_88b26c774a6543378e692669d2a" PRIMARY KEY ("from", "to"))`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_72fc658a4ca26a434e6fcffa872" FOREIGN KEY ("from") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_7f11c3e4186351940ec226f956b" FOREIGN KEY ("to") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_7f11c3e4186351940ec226f956b"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_72fc658a4ca26a434e6fcffa872"`);
        await queryRunner.query(`DROP TABLE "follow"`);
    }

}
