import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDatas1723712347375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`INSERT INTO public."Users"
            (id, name, email)
            VALUES
            (1, 'user1', 'user1@gmail.com'),
            (2, 'user2', 'user2@gmail.com'),
            (3, 'user3', 'user3@gmail.com'),
            (4, 'user4', 'user4@gmail.com')
        `);
        queryRunner.query(`INSERT INTO public."Rooms"
            (id, name, seats)
            VALUES
            (1, 'room1', 40),
            (2, 'room2', 41),
            (3, 'room3', 42),
            (4, 'room4', 43)
        `);
        queryRunner.query(`INSERT INTO public."Tickets"
            (id, room_id, time_from, time_end)
            VALUES
            (1, 1, '2024-08-20 08:00:00+07', '2024-08-20 10:00:00+07'),
            (2, 2, '2024-08-21 08:00:00+07', '2024-08-21 10:00:00+07'),
            (3, 3, '2024-08-22 08:00:00+07', '2024-08-22 10:00:00+07'),
            (4, 4, '2024-08-23 08:00:00+07', '2024-08-23 10:00:00+07')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
