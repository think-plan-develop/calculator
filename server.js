
import express from 'express';
import dotenv from 'dotenv'; 
import bodyParser from 'body-parser';
import calculatorRoutes from './routes/calculatorRoutes.js';
import connectDB from './config/db.js';

const app = express();
dotenv.config();
const port = process.env.PORT||5000; 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/calculator', calculatorRoutes);

connectDB
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

