import "reflect-metadata";
import { DataSource } from "typeorm";
import { Follow } from "./entity/Follow";
import { Material } from "./entity/Material";
import { StudyRecord } from "./entity/StudyRecord";
import { User } from "./entity/User";
import { Initial1679808898602 } from "./migration/1679808898602-Initial";
import { Initial1679813729460 } from "./migration/1679813729460-Initial";
import { Initial1679814091170 } from "./migration/1679814091170-Initial";
import { Initial1679928500037 } from "./migration/1679928500037-Initial";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: false,
  logging: true,
  logger: "file",
  entities: [User, Material, StudyRecord, Follow],
  migrations: [Initial1679808898602, Initial1679813729460, Initial1679814091170, Initial1679928500037],
  subscribers: [],
});
