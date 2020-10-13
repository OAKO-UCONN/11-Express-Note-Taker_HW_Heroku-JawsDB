//
//  server.js This is the node backend initalizer. Execute this file in node to run the app.
//
//Dependencies
const express = require("express");
const httpRouter = require("./routes/httpRouter");
const apiRouter = require("./routes/apiRouter");
//any other required goes here


// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;//Can change port if in use by another proccess.

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
