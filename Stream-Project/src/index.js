import dotenv from 'dotenv';
dotenv.config({ path: './src/.env' });

import connectDB from './db/index.js';

connectDB();