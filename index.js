const express = require("express");
const mongoose = require("mongoose");

const app = express();
const routers = require("./routers");
const bodyParser = require("body-parser");

//handling requests
// app.get("/api/products", (req, res) => {
//   res.send({
//     name: "Coffee",
//     price: 12000
//   })
// });

//mongodb connection
mongoose.connect("mongodb://localhost:27017/data-products");
mongoose.Promise = global.Promise;


//use body-parser
app.use(bodyParser.json());

//use routers
app.use("/api", routers);



app.listen(process.env.port || 5000, () => {
  console.log("Express app now listening requests 5000");
});