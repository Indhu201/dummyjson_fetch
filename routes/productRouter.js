import express from 'express';
import { getProducts, getProductById, createNewProduct, updateProductById } from '../handlers/productHandler.js';

export const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById)
productRouter.post('/', createNewProduct)
productRouter.patch('/:id', updateProductById)