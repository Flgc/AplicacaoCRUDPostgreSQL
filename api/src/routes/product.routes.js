// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 * Data: 25/02/2021
 */

 const router = require('express-promise-router')();
 const productController = require('../controllers/product.controller');


 // ==> Define as rotas do CRUD - 'Product':

 // ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products

 router.post('/products', productController.createProduct);
 
 // ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products 

 router.get('/products', productController.listAllProducts);

 module.exports = router;