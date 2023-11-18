import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700007835646 implements MigrationInterface {
    name = 'Migration1700007835646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "operacao"`)
        await queryRunner.query(`CREATE TABLE "operacao" ("id" SERIAL NOT NULL, "tipo_operacao" character varying NOT NULL, "mercado" character varying, "trade" character varying, "data_operacao" character varying NOT NULL, "quantidade" integer NOT NULL, "valor" integer NOT NULL, "corretagem" integer, "taxa_liquidacao" integer, "emolumentos" integer, "ir_retido" integer, "nota_corretagem" integer, "lucro_prejuizo" integer, "usuario_id" integer, "titulo_investimento_id" integer, CONSTRAINT "PK_16547c55b40eed622fb83182677" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD CONSTRAINT "FK_5b922db33e67726e57ae5e2aba1" FOREIGN KEY ("usuario_id") REFERENCES "operacao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD CONSTRAINT "FK_50860f7e549004ed24a9bdd37e8" FOREIGN KEY ("titulo_investimento_id") REFERENCES "titulo_investimento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" DROP CONSTRAINT "FK_50860f7e549004ed24a9bdd37e8"`);
        await queryRunner.query(`ALTER TABLE "operacao" DROP CONSTRAINT "FK_5b922db33e67726e57ae5e2aba1"`);
        await queryRunner.query(`DROP TABLE "operacao"`);
    }

}
