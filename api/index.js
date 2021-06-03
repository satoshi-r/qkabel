const express = require("express");
const catalog = require("./routes/catalog");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(catalog);


module.exports = {
    path: "/api",
    handler: app
};
