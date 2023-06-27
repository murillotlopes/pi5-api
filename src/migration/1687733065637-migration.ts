import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1687733065637 implements MigrationInterface {
    name = 'Migration1687733065637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "tipo" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "titulo_investimento" ALTER COLUMN "tipo" SET NOT NULL`);
    }

}
