import Investment from '../models/investment.model';
import { InvestmentCreationDTO, InvestmentUpdateDTO } from '../types/common.types';

export const getInvestmentsService = async (userId: string) => {
    return await Investment.find({ user: userId });
};

export const addInvestmentService = async (
    userId: string,
    investmentData: InvestmentCreationDTO
) => {
    const { type, name, quantity, purchasePrice } = investmentData;
    if (!type || !name || !quantity || !purchasePrice) {
        throw { status: 400, message: 'Please fill all required fields' };
    }

    const investment = new Investment({
        ...investmentData,
        user: userId,
    });

    return await investment.save();
};

export const updateInvestmentService = async (
    investmentId: string,
    userId: string,
    updateData: InvestmentUpdateDTO
) => {
    const investment = await Investment.findById(investmentId);

    if (!investment) {
        throw { status: 404, message: 'Investment not found' };
    }

    if (investment.user.toString() !== userId.toString()) {
        throw { status: 401, message: 'Not authorized' };
    }

    // Update fields
    investment.type = updateData.type || investment.type;
    investment.name = updateData.name || investment.name;
    investment.symbol = updateData.symbol || investment.symbol;
    investment.quantity = updateData.quantity || investment.quantity;
    investment.purchasePrice =
        updateData.purchasePrice || investment.purchasePrice;

    return await investment.save();
};

export const deleteInvestmentService = async (
    investmentId: string,
    userId: string
) => {
    const investment = await Investment.findById(investmentId);

    if (!investment) {
        throw { status: 404, message: 'Investment not found' };
    }

    if (investment.user.toString() !== userId.toString()) {
        throw { status: 401, message: 'Not authorized' };
    }

    await investment.deleteOne();
    return { message: 'Investment removed' };
};
