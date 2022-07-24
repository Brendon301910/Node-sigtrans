import { DataSource, Entity } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "brendon",
    password: "liomessi301910",
    database: "db-sigtrans",
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/database/migrations/*.ts"],
    synchronize: true,
    logging: false

});
    
export default AppDataSource

