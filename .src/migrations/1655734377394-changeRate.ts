import { MigrationInterface, QueryRunner } from "typeorm";

export class changeRate1655734377394 implements MigrationInterface {
    name = 'changeRate1655734377394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rates" ADD "itemItemUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "rates" ADD CONSTRAINT "FK_e700d7d503e8a9bf016579b2945" FOREIGN KEY ("itemItemUuid") REFERENCES "itens"("itemUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rates" DROP CONSTRAINT "FK_e700d7d503e8a9bf016579b2945"`);
        await queryRunner.query(`ALTER TABLE "rates" DROP COLUMN "itemItemUuid"`);
    }

}
