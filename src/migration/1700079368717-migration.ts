import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700079368717 implements MigrationInterface {
    name = 'Migration1700079368717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" DROP CONSTRAINT "FK_5b922db33e67726e57ae5e2aba1"`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD CONSTRAINT "FK_5b922db33e67726e57ae5e2aba1" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operacao" DROP CONSTRAINT "FK_5b922db33e67726e57ae5e2aba1"`);
        await queryRunner.query(`ALTER TABLE "operacao" ADD CONSTRAINT "FK_5b922db33e67726e57ae5e2aba1" FOREIGN KEY ("usuario_id") REFERENCES "operacao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
