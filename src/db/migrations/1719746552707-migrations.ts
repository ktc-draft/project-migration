import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1719746552707 implements MigrationInterface {
    name = 'Migrations1719746552707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "FK_de27f7356592ef106d816a4e873"`);
        await queryRunner.query(`ALTER TABLE "cluster" RENAME COLUMN "basecurridId" TO "basecurr_id"`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "FK_f950969716b8e976410e450ca73" FOREIGN KEY ("basecurr_id") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "FK_f950969716b8e976410e450ca73"`);
        await queryRunner.query(`ALTER TABLE "cluster" RENAME COLUMN "basecurr_id" TO "basecurridId"`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "FK_de27f7356592ef106d816a4e873" FOREIGN KEY ("basecurridId") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
