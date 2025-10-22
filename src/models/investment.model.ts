import mongoose, { Document, Schema } from 'mongoose';

export interface IInvestment extends Document {
    user: mongoose.Schema.Types.ObjectId;
    type: 'stock' | 'bond' | 'mutual_fund';
    name: string;
    symbol?: string;
    quantity: number;
    purchasePrice: number;
}

const investmentSchema: Schema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        type: {
            type: String,
            required: true,
            enum: ['stock', 'bond', 'mutual_fund'],
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
            default: 0,
        },
        purchasePrice: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Investment = mongoose.model<IInvestment>('Investment', investmentSchema);

export default Investment;
