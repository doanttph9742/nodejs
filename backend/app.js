import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import productRoutes from './routes/product';
import categoryRoutes from './routes/category';
import signupRoutes from './routes/auth';
import cors from 'cors';
import mongoose from 'mongoose';
import expressValidator from 'express-validator';
//
dotenv.config();
const app = express();
//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(expressValidator());
//connection
mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:false,
        useCreateIndex:true
}).then(() =>{
        console.log('database connected')
});
mongoose.connection.on('Error',err =>{
        console.log(`Data connect failed ,${err.message}`)
})
//routes
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api',signupRoutes);


const port = process.env.PORT || 8000;
app.listen(port, () => {
        console.log('server is running on port', port)
});