import app from "./app";
import { envConfig } from "./config";

(async () => {
  try {
    // await sequelize.authenticate();
    console.log("✅ DB connected");

    app.listen(envConfig.port, () => {
      console.log(`🚀 Server running on port ${envConfig.port}`);
    });
  } catch (error) {
    console.error("❌ DB connection failed", error);
  }
})();
