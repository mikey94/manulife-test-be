import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
    user: mongoose.Schema.Types.ObjectId;
    type: 'buy' | 'sell';
    name: string;
    symbol?: string;
    quantity: number;
    price: number;
    date: Date;
}

const transactionSchema: Schema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        type: {
            type: String,
            required: true,
            enum: ['buy', 'sell'],
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        symbol: {
            type: String,
            trim: true,
            uppercase: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const Transaction = mongoose.model<ITransaction>(
    'Transaction',
    transactionSchema
);

export default Transaction;
