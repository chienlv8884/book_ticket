import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCodeToUser1724054862864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('Users', new TableColumn({
            name: 'code',
            type: 'text',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
