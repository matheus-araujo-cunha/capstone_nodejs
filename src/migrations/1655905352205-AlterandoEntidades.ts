import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterandoEntidades1655905352205 implements MigrationInterface {
    name = 'AlterandoEntidades1655905352205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "licenced" TO "licensed"`);
        await queryRunner.query(`ALTER TABLE "itens" RENAME COLUMN "evaluationAverage" TO "average"`);
        await queryRunner.query(`ALTER TABLE "itens" DROP COLUMN "average"`);
        await queryRunner.query(`ALTER TABLE "itens" ADD "average" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens" DROP COLUMN "average"`);
        await queryRunner.query(`ALTER TABLE "itens" ADD "average" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "itens" RENAME COLUMN "average" TO "evaluationAverage"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "licensed" TO "licenced"`);
    }

}
