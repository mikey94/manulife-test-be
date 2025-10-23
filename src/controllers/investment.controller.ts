import { Request, Response } from "express";
import Investment from "../models/investment.model";
import { getInvestmentsService, addInvestmentService, deleteInvestmentService, updateInvestmentService } from "../services/investment.service";


export const getInvestments = async (req: Request, res: Response) => {
    try {
        const investments = await getInvestmentsService(req.user!._id.toString());
        res.json(investments);
    }
    catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
};

export const addInvestment = async (req: Request, res: Response) => {
  try {
      const createInvestment = await addInvestmentService(req.user!._id.toString(), req.body);
      res.status(201).json(createInvestment);
  }
  catch (error: any) {
      res.status(error.status || 500).json({ message: error.message });
  }
};

export const deleteInvestment = async (req: Request, res: Response) => {
    try {
        const deleteResult = await deleteInvestmentService(req.params.id, req.user!._id.toString());
        res.status(200).json(deleteResult);
    }
    catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
}

export const updateInvestment = async (req: Request, res: Response) => {
    try {
        const updateInvestment = await updateInvestmentService(req.params.id, req.user!._id.toString(), req.body);
        res.status(200).json(updateInvestment);
    }
    catch (error: any) {
        res.status(error.status || 500).json({ message: error.message });
    }
}