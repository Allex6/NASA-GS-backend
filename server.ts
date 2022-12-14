import app from './lib/app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));