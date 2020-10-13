//
//  apiRouter.js    Controls additions, deletions, and modifications to the db.JSON file.
//
//Dependencies
const express = require("express");
const fs = require("fs");
const app = express.Router();
const uuidv1 = require("uuidv1");
//add more dependencies below if needed...

let notes = require('../db/db.json');

//Everything inside this object will be exported as a module.
module.exports = (app) => {

    //GET REQUEST
    app.get('/api/notes', (req,res) => {

    });
}