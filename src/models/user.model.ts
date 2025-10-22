import mongoose, { Document, Schema, Types } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../types/user.type";

// Interface for User document
export interface IUserModel extends IUser, Document {
    _id: Types.ObjectId;
    matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema: Schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Encrypt password before saving it
userSchema.pre<IUserModel>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare entered password with hashed password
userSchema.methods.matchPassword = async function (
    enteredPassword: string
): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<IUserModel>('User', userSchema);

export default User;
