import { DataSourceOptions, DataSource } from "typeorm";

export const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user1',
    password: 'password',
    database: 'book_ticket_development',
    entities: ['dist/entities/*.js'],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
};

const dataSource =  new DataSource(config);
export default dataSource;
