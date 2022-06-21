import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1655743807821 implements MigrationInterface {
    name = 'initialMigration1655743807821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rates" ("rateUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "rate" double precision NOT NULL, "comment" character varying(100) NOT NULL, "itemItemUuid" uuid, CONSTRAINT "PK_7d24c71b3a6d50f734c9f228434" PRIMARY KEY ("rateUuid"))`);
        await queryRunner.query(`ALTER TABLE "rates" ADD CONSTRAINT "FK_e700d7d503e8a9bf016579b2945" FOREIGN KEY ("itemItemUuid") REFERENCES "itens"("itemUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rates" DROP CONSTRAINT "FK_e700d7d503e8a9bf016579b2945"`);
        await queryRunner.query(`DROP TABLE "rates"`);
    }

}
