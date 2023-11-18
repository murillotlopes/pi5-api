import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700080066809 implements MigrationInterface {
    name = 'Migration1700080066809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD "valor" numeric(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" DROP COLUMN "valor"`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD "valor" integer NOT NULL`);
    }

}
