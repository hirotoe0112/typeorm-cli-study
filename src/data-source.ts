import "reflect-metadata"
import { DataSource } from "typeorm"
import { Material } from "./entity/Material"
import { StudyRecord } from "./entity/StudyRecord"
import { User } from "./entity/User"
import { Initial1679808898602 } from "./migration/1679808898602-Initial"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: false,
    logging: true,
    logger: 'file',
    entities: [
        User,
        Material,
        StudyRecord,
    ],
    migrations: [
        Initial1679808898602,
    ],
    subscribers: [],
})
