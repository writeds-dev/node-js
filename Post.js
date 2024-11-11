"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// auth
var auth = function (req, res, next) {
    var allHeader = req.headers;
    var token = allHeader.token;
    if (token === "node js ") {
        next();
    }
    else {
        res.status(200).josn({ auth: "failed" });
    }
};
// authenticaion
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === "admin" && req.body.pwd === "123") {
        res.status(200).json({ login: "sucessfull" });
    }
    else {
        res.status(201).json({ login: "failed" });
    }
});
app.listen(8080, function () {
    console.log("server is started");
});
