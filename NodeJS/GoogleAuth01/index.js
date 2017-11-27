const port=3000;
const express = require("express");
const app = express();
const authEngine = require("./authengine");

app.use("/",express.static('webapp'))

app.listen(port, function () {
  console.log('Example app listening on port'+port+'!');
});


console.log('Application started');