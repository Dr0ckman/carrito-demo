import "./loadEnvironment.mjs";
import express from 'express';
import cors from 'cors';
import products from './routes/products.mjs'

const app = express()
const PORT = 3000

app.use(cors());
app.use(express.json());

app.use("/products", products);

app.get('/', (req, res) => {
    res.send('Hello World');
})

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})
