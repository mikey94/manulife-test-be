import Transaction from '../models/transaction.model';
import { TransactionCreationDTO } from '../types/common.types';

export const getTransactionsService = async (userId: string) => {
    //  Get transactions for user and sort it in descending order
    return await Transaction.find({user: userId}).sort({
        date: -1,
    });
};

export const addTransactionService = async (
    userId: string,
    transactionData: TransactionCreationDTO
) => {
    const { type, name, quantity, price, date } = transactionData;
    if (!type || !name || !quantity || !price || !date) {
        throw { status: 400, message: 'Please fill all fields' };
    }

    const transaction = new Transaction({
        ...transactionData,
        user: userId,
    });

    return await transaction.save();
};
