
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 

dotenv.config();
const uri = process.env.DB_URI; 

let connection=mongoose.connect(uri)
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri);
    console.log('Connected to MongoDB!');
    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default connectDB();