import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1687904167100 implements MigrationInterface {
    name = 'Migration1687904167100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" DROP COLUMN "data_operacao"`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD "data_operacao" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" DROP COLUMN "data_operacao"`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD "data_operacao" TIMESTAMP NOT NULL`);
    }

}
