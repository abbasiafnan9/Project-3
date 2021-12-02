import express from 'express';
import dotenv from 'dotenv';

import Connection from './db/connection.js';

dotenv.config();
const app = express();

const PORT = 3001;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

Connection(username,password);
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
