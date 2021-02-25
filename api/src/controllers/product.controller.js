/**
 * Arquivo: src/controllers/product.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Product'
 * Data: 25/02/2021
 */


 // ==> * método responsável por criar um novo 'Product'.
 
 const db = require("../config/database");

 exports.createProduct = async (req, res) => {
    const { product_name, quantity, price } = req.body;
    const { rows } = await db.query(
       "INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)",
       [product_name, quantity, price]
    );

    res.status(201).send({
       message: "Product added successfully!",
       body: {
          product: { product_name, quantity, price }
       },
    });

    // ==> Método desponsável por listar todos os 'Products':
    
    exports.listAllProducts = async (req, res) => {
      const response = await db.query(
         'SELECT * FROM products ORDER BY productname ASC');
         res.status(200).send(response.rows);
   };
 };