import { Request, Response } from 'express';
import { registerUserService, loginUserService } from "../services/auth.service";


export const registerUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await registerUserService(email, password);
        res.status(201).json(user);
    }
    catch (error: any) {
        res.status(error.status | 500).json({ message: error.message})
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginUserService(email, password);
        res.status(200).json(user);
    }
    catch (error: any) {
        res.status(error.status | 500).json({ message: error.message})
    }
}