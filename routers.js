const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.send("Get Products");
});

router.post("/products", (req, res) => {
  res.send({
    method: "POST",
    name: req.body.name,
    price: req.body.price
  });
})
router.put("/products/:id", (req, res) => {
  res.send("Put Product");
});

router.delete("/products/:id", (req, res) => {
  res.send("Delete Products");
});

module.exports = router;