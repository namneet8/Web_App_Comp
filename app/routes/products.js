const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes for CRUD operations
router.get('/Products', productController.listProducts);

// Create a new product
router.post('/products', productController.createProduct);

// Get a product by ID
router.get('/products/:id', productController.getProductById);

// Update a product by ID
router.put('x', productController.updateProduct);

// Remove a product by ID
router.delete('/products/:id', productController.removeProduct);

module.exports = router;