const express = require("express");

const app = express();

//handling requests
app.get("/api/products", function(req, res){
  res.send({
    name: "Coffee",
    price: 12000
  })
});

app.listen(process.env.port || 5000, function() {
  console.log("Express app now listening requests 5000");
});