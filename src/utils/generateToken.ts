import jwt from 'jsonwebtoken';

const generateToken = (token: string): string => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new Error('JWT secret not defined in environment config file');
    }
    return jwt.sign({ id: token }, jwtSecret, {
        expiresIn: '7d',
    });
};

export default generateToken;