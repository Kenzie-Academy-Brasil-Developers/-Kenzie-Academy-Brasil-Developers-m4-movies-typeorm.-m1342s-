import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688054550259 implements MigrationInterface {
    name = 'InitialMigration1688054550259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" SET NOT NULL`);
    }

}
