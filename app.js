const express = require("express");
const app = express();
const auth = require("./system/middleware/authentication");
const cron = require("node-cron");
const { syncData } = require("./api/syncService");

if (process.env.NODE_ENV === "local") {
  require("dotenv").config({
    path: `./${process.env.NODE_ENV}.env`,
  });
}

app.use(express.json());

const userInfo = require("./api/User/route");
const menuInfo = require("./api/Menu/route");

// Schedule cron job to run every 10 minutes
cron.schedule("*/10 * * * *", async () => {
  console.log("Starting the data sync job...");
  try {
    await syncData();
    console.log("Data sync completed successfully.");
  } catch (error) {
    console.error("Error during data sync:", error);
  }
});

//public route
app.get("/", () => {
  res.send("hello world");
});
app.use("/", userInfo);

//private route
app.use("/", auth.authenticate);
app.use("/", menuInfo);

app.listen(3000, () => {
  console.log("Server Is Running On " + 3000);
});
