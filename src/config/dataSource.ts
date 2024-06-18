import { DataSource } from "typeorm";


export const datasource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    database: "postgres",
    username: "postgres",
    password: "LIhLdvdXz3WYK1401Z",
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
    entities: ['**/*.entity.ts'],

  });
