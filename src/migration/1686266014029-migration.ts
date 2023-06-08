import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1686266014029 implements MigrationInterface {
    name = 'Migration1686266014029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "UQ_2863682842e688ca198eb25c124" UNIQUE ("email"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rendimento" ("id" SERIAL NOT NULL, "tipo" character varying NOT NULL, "quantidade" integer NOT NULL, "valor_cota" integer NOT NULL, "titulo_investimento_id" integer, CONSTRAINT "PK_301cc42f385be1d998ade3ca01a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "titulo_investimento" ("id" SERIAL NOT NULL, "ticket" character varying NOT NULL, "nome_empresa" character varying NOT NULL, "cnpj" character varying NOT NULL, "tipo" character varying NOT NULL, "segmento" character varying NOT NULL, "divident_yield" character varying NOT NULL, "cota_rendimento" integer NOT NULL, CONSTRAINT "PK_97fac84b66e6a5c640fdbcdd816" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "operacao" ("id" SERIAL NOT NULL, "tipo_operacao" character varying NOT NULL, "mercado" character varying NOT NULL, "trade" character varying NOT NULL, "data_operacao" TIMESTAMP NOT NULL, "quantidade" integer NOT NULL, "valor" integer NOT NULL, "corretagem" integer NOT NULL, "taxa_liquidacao" integer NOT NULL, "emolumentos" integer NOT NULL, "ir_retido" integer NOT NULL, "nota_corretagem" integer NOT NULL, "lucro_prejuizo" integer NOT NULL, "usuario_id" integer, "titulo_investimento_id" integer, CONSTRAINT "PK_16547c55b40eed622fb83182677" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rendimento" ADD CONSTRAINT "FK_c319acb46741d6cfdc593360c5f" FOREIGN KEY ("titulo_investimento_id") REFERENCES "titulo_investimento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD CONSTRAINT "FK_5b922db33e67726e57ae5e2aba1" FOREIGN KEY ("usuario_id") REFERENCES "operacao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD CONSTRAINT "FK_50860f7e549004ed24a9bdd37e8" FOREIGN KEY ("titulo_investimento_id") REFERENCES "titulo_investimento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" DROP CONSTRAINT "FK_50860f7e549004ed24a9bdd37e8"`);
        await queryRunner.query(`ALTER TABLE "operacao" DROP CONSTRAINT "FK_5b922db33e67726e57ae5e2aba1"`);
        await queryRunner.query(`ALTER TABLE "rendimento" DROP CONSTRAINT "FK_c319acb46741d6cfdc593360c5f"`);
        await queryRunner.query(`DROP TABLE "operacao"`);
        await queryRunner.query(`DROP TABLE "titulo_investimento"`);
        await queryRunner.query(`DROP TABLE "rendimento"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
