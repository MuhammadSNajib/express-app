const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  name : {type: String, required: true},
  price : {type: Number, required: true},
});

const Products = mongoose.model("products", ProductsSchema);

module.exports = Products;