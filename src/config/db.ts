import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUrl = process.env.DATABASE_URL;
        if (!mongoUrl) {
            console.error("MongoDB connection error: MongoDB connection error");
            process.exit(1);
        }
        const connection = await mongoose.connect(mongoUrl);
        console.log(`Database Connected ${connection.connection.host}`);
    }
    catch (error: any) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;