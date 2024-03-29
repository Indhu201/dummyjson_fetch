import express from 'express';
import cors from 'cors';
import path from 'path';

import { productRouter } from './routes/productRouter.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname); // Define __dirname

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/products', productRouter);

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
  });

app.listen(3000, () => console.log("SERVER STARTED"));

