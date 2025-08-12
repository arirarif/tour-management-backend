import express, { Request, Response } from "express";
import { Server } from "http";
import mongoose from "mongoose";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the server",
  });
});
export default app;
