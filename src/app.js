import express from "express";
import router from "./routes/index";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
mongoose.connect(`${process.env.API_DB}`);

app.use("/api", router);

export const viteNodeApp = app;
