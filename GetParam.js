"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var getvalue = express();
var auth = function (req, res, next) {
    var allHeader = req.headers;
    if (allHeader.token === "devanshu") {
        next();
    }
    else {
        res.status(400).json({ auth: "failed" });
    }
};
getvalue.get("/login", [auth], function (req, res) {
    if (req.query.uname === "dev" && req.query.pwd === "dev2") {
        res.status(200).json({ login: "sucessfull" });
    }
    else {
        res.status(201).json({ login: "failed" });
    }
});
getvalue.listen(8080, function () {
    console.log("server is started at port number is 8080");
});
