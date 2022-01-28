const express = require("express");

const routes = require("./routes");

const app = express;
const port = process.env.port || 3333;

app.use(routes);

app.listen(port, () => console.log("started at 3333"));
