import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: server;

const startServer = async () => {
  try {
    console.log(envVars.NODE_ENV);
    await mongoose.connect(envVars.DB_URL);
    console.log("connected to MongoDB");
    server = app.listen(envVars.PORT, () => {
      console.log("Server is running on port ${envVars.PORT}");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
