import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import smsRoutes from './routes/smsRoute.js';
import authRoutes from './routes/auth.js';
// import authRoute from './routes/auth.js';

import connectDB from './config/db.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api/v1', smsRoutes);
app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/auth', authRoute);

const __dirname = path.resolve()
app.use(cors({origin: process.env.FRONT_URL, credentials: true}))

if(process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/dist')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
    connectDB();
});