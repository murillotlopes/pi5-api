import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1687730181610 implements MigrationInterface {
    name = 'Migration1687730181610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "cnpj" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "segmento" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "divident_yield" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "cota_rendimento" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "mercado" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "trade" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "corretagem" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "taxa_liquidacao" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "emolumentos" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "ir_retido" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "nota_corretagem" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "lucro_prejuizo" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "lucro_prejuizo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "nota_corretagem" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "ir_retido" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "emolumentos" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "taxa_liquidacao" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "corretagem" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "trade" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "operacao" ALTER COLUMN "mercado" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "cota_rendimento" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "divident_yield" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "segmento" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "cnpj" SET NOT NULL`);
    }

}
