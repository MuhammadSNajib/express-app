const express = require("express");
const router = express.Router();
const Products = require("./models/products");

router.get("/products", (req, res) => {
  res.send("Get Products");
});

router.post("/products", (req, res, next) => {
  Products.create(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch(next)
});

router.put("/products/:id", (req, res) => {
  Products.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((result) => {
      Products.findOne({ _id: req.params.id })
        .then((new_result) => {
          res.send(new_result)
        });
    });
});

router.delete("/products/:id", (req, res) => {
  Products.findOneAndRemove({ _id: req.params.id })
    .then((result) => {
      res.send(result)
    });
});

module.exports = router;