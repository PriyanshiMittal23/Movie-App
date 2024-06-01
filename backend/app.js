import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import playlistRoutes from './routes/playlist.routes.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(express.json()) //to parse the incoming requests with JSON payloads(from body of request)
app.use(cookieParser()); // to parse through cookies

const uploadDir = path.join(process.cwd(), 'backend/public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware to serve static files from the backend/public/uploads directory
app.use('/uploads', express.static(uploadDir));

app.get("/",(req,res)=>{
    res.send("hello");
})
app.use('/api/auth',authRoutes);
app.use('/api/playlist',playlistRoutes);

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running at port ${PORT}`)
})