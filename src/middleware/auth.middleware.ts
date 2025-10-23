import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import User from "../models/user.model";

const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = (token: string): string | jwt.JwtPayload => {
    if (!JWT_SECRET) {
        console.error('JWT_SECRET is not defined. Check your .env file.');
        throw new Error('Server configuration error.');
    }
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        console.error('Invalid token', error);
        throw new Error('Invalid or expired token.');
    }
};

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {

            token = req.headers.authorization.split(' ')[1];

            const decoded = verifyToken(token) as { id: string };

            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({ message: 'User not found' });
            }

            next();
        } catch (error) {
            console.error(error);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};
