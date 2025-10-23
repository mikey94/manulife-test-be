import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import investmentRoutes from "./routes/investment.routes";
import transactionRoutes from "./routes/transaction.routes";

connectDB();

const app = express();

app.use(cors({
    origin: '*',
    methods: ["GET,PUT,POST,DELETE,OPTIONS"],
}));

app.use(express.json());

app.get("/api", (req, res) => {
    res.send("Portfolio Management API is up and running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", investmentRoutes);
app.use("/api/transaction", transactionRoutes);

app.use(( err: Error, req: Request, res: Response, next: Function) => {
    res.status(500).json({"Something went wrong": err});
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
