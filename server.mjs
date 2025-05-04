import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.mjs';
import authRoutes from './routes/authRoutes.mjs';
import { protect } from './middlewares/authMiddleware.mjs';
import { authorize } from './middlewares/roleMiddleware.mjs';
import robotRoutes from './routes/robotRoutes.mjs';  
import eventRoutes from './routes/eventRoutes.mjs';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/auth', authRoutes);
app.use(
    '/api/robots',
    protect,
    // luego en robotRoutes usaremos authorize() por ruta
    robotRoutes
  );

app.use('/api/events', protect, eventRoutes); 
// Protegiendo las rutas de eventos

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

