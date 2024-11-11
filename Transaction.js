"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction = express.Router();
transaction.get("/", function (req, res) {
    res.status(200).json({ message: "this is trasnactin get request" });
});
exports.default = transaction;
