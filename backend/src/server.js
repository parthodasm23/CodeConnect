import express from "express";
import mongoose from "mongoose";
import { ENV } from "./lib/env.js";

const app = express();
app.get("/", (req, res) => {
  res.status(200).json("Hello CodeConnect");
});
app.listen(ENV.PORT, () => {
  console.log("Server listening....");
});
