//
//  apiRouter.js    Controls additions, deletions, and modifications to the db.JSON file.
//
//Dependencies
const express = require("express");
const fs = require("fs");
//const app = express.Router();
//const uuidv1 = require("uuidv1");
//add more dependencies below if needed...

let notes = require('../db/db.json');

//Everything inside this object will be exported as a module.
module.exports = (app) => {

    //GET REQUEST
    app.get('/api/notes', (req,res) => {
        res.json(notes);
    });

    //POST REQUEST
    app.post('/api/notes', (req,res) => {
        const note = req.body;

        //Now going to organize the notes by publish date.
        //Older notes go on top, newer go below. This can be changed in a future update.
        //Loop to check the highest note id number:
        let highest = 0;
        for (let key in notes) {
            let id = notes[key].id;
            if (id > highest) {
                highest = id;
            }
        }

    //Add by one to the highest number to set to the new note:
    note.id = highest + 1;
    notes.push(note);

    //Write new json element to the db.json file:
    fs.writeFile("db/db.json", JSON.stringify(notes), function(err) {
        
        //Error checking
        if (err) {
            return console.log(err);
        }

        //Console log once complete.
        console.log("Succesfully added to the db.json file a new JSON element.");
        res.json(note);
    
    });//END FS.WRITEFILE

    });//END POST REQUEST

};//END MODULE