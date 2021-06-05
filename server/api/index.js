const express = require("express");
const bodyParser = require("body-parser");
const routes = require("require-all")(__dirname + "/routes");
const db = require("../db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

for (const name in routes) {
    app.use(routes[name]);
}

module.exports = {
    path: "/api",
    handler: app
};
