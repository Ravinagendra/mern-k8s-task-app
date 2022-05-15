import mongoose from 'mongoose';
import config from './config.js';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            `mongodb://${config.mongoDbUrl}/${config.appDB}`
        );
        console.log(`connected to mongo db`);
    } catch (error) {
        console.log(`mongo db connection error`);
        console.log(error);
    }
};
