// server.ts

import express from 'express';
import apiRoutes from './routes/api/index';

const app = express();
const PORT = 3000;

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
