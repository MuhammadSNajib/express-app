const express = require("express");
const router = express.Router();
const Products = require("./models/products");

router.get("/products", (req, res) => {
  res.send("Get Products");
});

router.post("/products", (req, res) => {
  Products.create(req.body)
    .then((result) => {
      res.send(result);
    })
});

router.put("/products/:id", (req, res) => {
  res.send("Put Product");
});

router.delete("/products/:id", (req, res) => {
  res.send("Delete Products");
});

module.exports = router;