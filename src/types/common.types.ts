import { IInvestment } from '../models/investment.model';
import { ITransaction } from '../models/transaction.model';

// Data Transfer Object (DTO) for creating an investment
export type InvestmentCreationDTO = Omit<IInvestment, '_id' | 'user' | 'createdAt' | 'updatedAt' | 'save' | 'deleteOne'>;

// DTO for updating an investment
export type InvestmentUpdateDTO = Partial<InvestmentCreationDTO>;

// DTO for creating a transaction
export type TransactionCreationDTO = Omit<ITransaction, '_id' | 'user' | 'createdAt' | 'updatedAt' | 'save' | 'deleteOne'>;

export interface JwtPayload {
    id: string;
}

