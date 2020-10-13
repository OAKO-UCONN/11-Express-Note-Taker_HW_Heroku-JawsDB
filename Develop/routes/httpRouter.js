// 
//  httpRouter.js    This file handles http requests and routes the appropriate html file.
//

//Dependencies
//const { resolveNaptr } = require("dns");
const express = require("express");
const path = require("path");
const app = express.Router();
//More dependencies can be added below.

//  /notes route
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "/../public/notes.html"));
});

//  /   default route
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
});

//export
module.exports = app;