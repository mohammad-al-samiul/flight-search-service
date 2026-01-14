import "dotenv/config";

export const envConfig = {
  port: Number(process.env.PORT) || 5000,
  db_uri: process.env.DB_URI as string,
};
