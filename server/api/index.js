const express = require("express");
const catalog = require("./routes/catalog");
const popular = require("./routes/popular");
const groups = require("./routes/groups");
const products = require("./routes/products");
const db = require("../db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(catalog);
app.use(popular);
app.use(groups);
app.use(products);

module.exports = {
    path: "/api",
    handler: app
};
