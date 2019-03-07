const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.send("Get Products")
})

router.post("/product", (req, res) => {
  res.send("Post Product")
})
router.put("/product/:id", (req, res) => {
  res.send("Put Product")
})

router.delete("/product/:id", (req, res) => {
  res.send("Delete Products")
})

module.exports = router;