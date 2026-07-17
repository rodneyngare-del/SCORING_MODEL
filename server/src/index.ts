import { env } from "./config/env.js";
import { createApp } from "./app.js";
import { startCronJobs } from "./services/cron-jobs.js";

const app = createApp();

// ضمان إنه رقم 100%
const PORT = Number(process.env.PORT) || env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);

  if (process.env.NODE_ENV === "production") {
    startCronJobs();
    console.log("⏰ Cron jobs started");
  }
});