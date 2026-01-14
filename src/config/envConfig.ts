import "dotenv/config";

export const envConfig = {
  port: process.env.PORT,
  db_uri: process.env.DB_URI,
};
