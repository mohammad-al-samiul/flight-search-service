import { Sequelize } from "sequelize";
import { envConfig } from "./envConfig";

export const sequelize = new Sequelize(envConfig.db_uri, {
  dialect: "mysql",
  logging: false,
});
