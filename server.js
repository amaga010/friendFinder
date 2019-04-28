// required packages 
const path = require("path");
const express = require("express");
const app = express();
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Link to html pages
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starting the Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
 });