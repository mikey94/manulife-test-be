import { Request, Response } from "express";
import Transaction from "../models/transaction.model";
import { getTransactionsService, addTransactionService } from "../services/transaction.service";

export const getTransaction = async ( req: Request, res: Response) => {
    try {
        const transactions  = await getTransactionsService(req.user!._id.toString());
        res.status(200).json(transactions);
    }
    catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

export const addTransaction = async ( req: Request, res: Response) => {
    try {
        const createTransaction = await addTransactionService(req.user!._id.toString(), req.body);
        res.status(200).json(createTransaction);
    }
    catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
}