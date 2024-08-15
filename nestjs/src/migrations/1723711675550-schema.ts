import { MigrationInterface, QueryRunner } from "typeorm";

export class Schema1723711675550 implements MigrationInterface {
    name = 'Schema1723711675550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Rooms" ("id" SERIAL NOT NULL, "name" character varying, "seats" integer, CONSTRAINT "PK_f120a70aaf1cecbd6c1ac8f1c23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Tickets" ("id" SERIAL NOT NULL, "room_id" integer NOT NULL, "time_from" TIMESTAMP, "time_end" TIMESTAMP, CONSTRAINT "PK_6533595a87a7d0e3b7ed082b2aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "name" character varying, "email" character varying, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Tickets" ADD CONSTRAINT "FK_ac48db515878534b38ccc272779" FOREIGN KEY ("room_id") REFERENCES "Rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tickets" DROP CONSTRAINT "FK_ac48db515878534b38ccc272779"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Tickets"`);
        await queryRunner.query(`DROP TABLE "Rooms"`);
    }

}
