// 
//  httpRouter.js    This file handles http requests and routes the appropriate html file.
//
//Dependencies
const express = require("express");
const path = require("path");
const app = express.Router();
//More dependencies can be added below...


//Everything inside this object will be exported.
module.exports = (app) => {

//  /notes route
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "/../public/notes.html"));
});

//  "/"  This is the default route if a route is undefined.
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
});

};