import { Types } from "mongoose";

export interface IUser {
    email: string;
    password: string;
}

export interface IUserPayload {
    _id: Types.ObjectId | string;
}

declare global {
    namespace Express {
        export interface Request {
            user?: IUserPayload | null
        }
    }
}