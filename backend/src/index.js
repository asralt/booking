import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database before starting the server
connectDB();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
