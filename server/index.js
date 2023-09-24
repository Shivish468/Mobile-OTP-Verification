import app from './app.js';
import { config } from 'dotenv';
config();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  });
