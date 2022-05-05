import express from 'express';
import { connectDB } from './db.js';
import router from './router.js';

const app = express();
connectDB();

app.use(express.json());

app.use('/api', router);

export default app;
