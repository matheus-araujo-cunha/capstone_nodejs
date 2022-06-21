import { MigrationInterface, QueryRunner } from "typeorm";

export class initialCommit1655745027582 implements MigrationInterface {
    name = 'initialCommit1655745027582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rates" ("rateUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "rate" double precision NOT NULL, "comment" character varying(100) NOT NULL, "itemItemUuid" uuid, CONSTRAINT "PK_7d24c71b3a6d50f734c9f228434" PRIMARY KEY ("rateUuid"))`);
        await queryRunner.query(`CREATE TABLE "reserves" ("reserveUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" double precision NOT NULL, "startDate" TIMESTAMP NOT NULL, "finishDate" TIMESTAMP NOT NULL, "userUserUuid" uuid, "itemItemUuid" uuid, CONSTRAINT "PK_6ee0c133713cdc06d90b4cfb65e" PRIMARY KEY ("reserveUuid"))`);
        await queryRunner.query(`CREATE TABLE "users" ("userUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "licenced" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_4309f0e033d9da5c1f3fd07b7d7" PRIMARY KEY ("userUuid"))`);
        await queryRunner.query(`CREATE TABLE "rents" ("rentUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" double precision NOT NULL, "startDate" TIMESTAMP NOT NULL, "finishDate" TIMESTAMP NOT NULL, "userUserUuid" uuid, "itemItemUuid" uuid, CONSTRAINT "PK_f9718ba25797cfae06e9767008f" PRIMARY KEY ("rentUuid"))`);
        await queryRunner.query(`CREATE TABLE "itens" ("itemUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying(120) NOT NULL, "brand" character varying(100) NOT NULL, "year" integer NOT NULL, "capacity" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "location" character varying(50) NOT NULL, "dailyPrice" double precision NOT NULL, "service" boolean NOT NULL DEFAULT true, "image" character varying NOT NULL, "ownerUserUuid" uuid, CONSTRAINT "PK_fb4db430418f61022ff301043fc" PRIMARY KEY ("itemUuid"))`);
        await queryRunner.query(`ALTER TABLE "rates" ADD CONSTRAINT "FK_e700d7d503e8a9bf016579b2945" FOREIGN KEY ("itemItemUuid") REFERENCES "itens"("itemUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reserves" ADD CONSTRAINT "FK_77511159a69f6937f7b3b9107c7" FOREIGN KEY ("userUserUuid") REFERENCES "users"("userUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reserves" ADD CONSTRAINT "FK_809c1b72160340627f7c8facc61" FOREIGN KEY ("itemItemUuid") REFERENCES "itens"("itemUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_4215af1aab14793b7fcb8f981b6" FOREIGN KEY ("userUserUuid") REFERENCES "users"("userUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_ee8da4b715c6e16ec942960ef83" FOREIGN KEY ("itemItemUuid") REFERENCES "itens"("itemUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "itens" ADD CONSTRAINT "FK_8bd6702504cbbb4d672c34b8632" FOREIGN KEY ("ownerUserUuid") REFERENCES "users"("userUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens" DROP CONSTRAINT "FK_8bd6702504cbbb4d672c34b8632"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_ee8da4b715c6e16ec942960ef83"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_4215af1aab14793b7fcb8f981b6"`);
        await queryRunner.query(`ALTER TABLE "reserves" DROP CONSTRAINT "FK_809c1b72160340627f7c8facc61"`);
        await queryRunner.query(`ALTER TABLE "reserves" DROP CONSTRAINT "FK_77511159a69f6937f7b3b9107c7"`);
        await queryRunner.query(`ALTER TABLE "rates" DROP CONSTRAINT "FK_e700d7d503e8a9bf016579b2945"`);
        await queryRunner.query(`DROP TABLE "itens"`);
        await queryRunner.query(`DROP TABLE "rents"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "reserves"`);
        await queryRunner.query(`DROP TABLE "rates"`);
    }

}
