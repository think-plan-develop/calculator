import dotenv from 'dotenv'; 
dotenv.config();
const APITOKEN = process.env.APITOKEN 
const validateAPIToken = (req, res, next) => {
    const { api_token } = req.headers;
    const validToken = APITOKEN; 
  
    if (!api_token || api_token !== validToken) {
      return res.status(401).json({ message: 'Unauthorized: Invalid API token' });
    }
    next();
  };
  
  export default validateAPIToken;
  