let WEB_PACK;
console.log("WebConfig Application started");
process.env.NODE_ENV = process.env.NODE_ENV || "developemnt";
WEB_PACK = require('./webpack.dev.js');


module.exports = WEB_PACK;
