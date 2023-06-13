// server.ts

import express from 'express';
import apiRoutes from './routes/api/index';
import {API_PREFIX} from "./constants";

const app = express();
const PORT = 3000;

app.use(`/${API_PREFIX}`, apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
