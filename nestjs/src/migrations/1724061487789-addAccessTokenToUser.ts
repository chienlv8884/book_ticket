import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddAccessTokenToUser1724061487789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('Users', new TableColumn({
            name: 'access_token',
            type: 'text',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
