import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

/**
 * simple DB connection function, no parameters, nothing
 * @returns {Promise<void>}
 */
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected To DB', connection.connection.host);
    } catch(err) {
        console.log('DB Failed To COnnect. Error: ', err);
    }
}

export default connectDB;