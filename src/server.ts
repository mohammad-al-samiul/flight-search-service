import app from "./app";
import { envConfig } from "./config";

app.listen(envConfig.port, () => {
  console.log(`🚀 Flight Search Service running on port ${envConfig.port}`);
});
