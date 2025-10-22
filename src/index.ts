import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio Management API is up and running!");
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
