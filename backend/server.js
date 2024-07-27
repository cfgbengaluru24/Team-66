import express from 'express';
import dbConnect from './config/dbConnection.js'; // Corrected import statement
import { cloudinaryConnect } from './config/cloudinary.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import dotenv from 'dotenv';
import authenticationRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp',
  })
);

dbConnect();
cloudinaryConnect();

app.use('/api/v1/auth', authenticationRoutes);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Default route has been running successfully',
  });
});

app.listen(PORT, () => {
  console.log(`Your backend is running on PORT ${PORT}`);
});
