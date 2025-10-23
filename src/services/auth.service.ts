import User from '../models/user.model';
import generateToken from '../utils/generateToken';


export const registerUserService = async (email: string, password: string) => {
    if (!email || !password) {
        throw { status: 400, message: 'Please enter all fields' };
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        throw { status: 400, message: 'User already exists' };
    }

    const user  = await User.create({
        email,
        password,
    });

    if (user) {
        return {
            _id: user._id,
            email: user.email,
            token: generateToken(user._id.toString()),
        };
    } else {
        throw { status: 400, message: 'Invalid user data' };
    }
};

export const loginUserService = async (email: string, password: string) => {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        return {
            _id: user._id,
            email: user.email,
            token: generateToken(user._id.toString()),
        };
    } else {
        throw { status: 401, message: 'Invalid email or password' };
    }
};
