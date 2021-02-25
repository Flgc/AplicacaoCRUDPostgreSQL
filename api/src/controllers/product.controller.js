/**
 * Arquivo: src/controllers/product.controller.js
 * Descrição: método responsável por criar um novo 'Product'.
 * Data: 25/02/2021
 */

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
 };