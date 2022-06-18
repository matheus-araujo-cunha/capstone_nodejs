import { MigrationInterface, QueryRunner } from "typeorm";

export class changingRulesOfRelationship1654647676134 implements MigrationInterface {
    name = 'changingRulesOfRelationship1654647676134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens_rates_rates" ("itensItemUuid" uuid NOT NULL, "ratesRateUuid" uuid NOT NULL, CONSTRAINT "PK_465a923c81a0ee01d35e2e20f35" PRIMARY KEY ("itensItemUuid", "ratesRateUuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d392f8a69ed07fb7b3fddb05df" ON "itens_rates_rates" ("itensItemUuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_26b70d52aebbdaff4e893b7902" ON "itens_rates_rates" ("ratesRateUuid") `);
        await queryRunner.query(`ALTER TABLE "itens" ADD "ownerUserUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "itens" ADD CONSTRAINT "FK_8bd6702504cbbb4d672c34b8632" FOREIGN KEY ("ownerUserUuid") REFERENCES "users"("userUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itens_rates_rates" ADD CONSTRAINT "FK_d392f8a69ed07fb7b3fddb05dfb" FOREIGN KEY ("itensItemUuid") REFERENCES "itens"("itemUuid") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "itens_rates_rates" ADD CONSTRAINT "FK_26b70d52aebbdaff4e893b7902a" FOREIGN KEY ("ratesRateUuid") REFERENCES "rates"("rateUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens_rates_rates" DROP CONSTRAINT "FK_26b70d52aebbdaff4e893b7902a"`);
        await queryRunner.query(`ALTER TABLE "itens_rates_rates" DROP CONSTRAINT "FK_d392f8a69ed07fb7b3fddb05dfb"`);
        await queryRunner.query(`ALTER TABLE "itens" DROP CONSTRAINT "FK_8bd6702504cbbb4d672c34b8632"`);
        await queryRunner.query(`ALTER TABLE "itens" DROP COLUMN "ownerUserUuid"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_26b70d52aebbdaff4e893b7902"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d392f8a69ed07fb7b3fddb05df"`);
        await queryRunner.query(`DROP TABLE "itens_rates_rates"`);
    }

}
