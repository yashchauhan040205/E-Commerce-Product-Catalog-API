const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataPath = path.join(__dirname, "../data/products.json");

const getProducts = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
};

router.get("/", (req, res) => {
    const products = getProducts();
    res.json(products);
});

router.get("/:id", (req, res) => {
    const products = getProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});

router.get("/", (req, res) => {
    const { category } = req.query;
    const products = getProducts();
    if (category) {
        const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        return res.json(filteredProducts);
    }
    res.json(products);
});

module.exports = router;
