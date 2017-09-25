const port=3000;
const express = require("express");
const app = express();

app.use("/",express.static('webapp'))

app.listen(port, function () {
  console.log('Example app listening on port'+port+'!');
});

console.log('Application started');