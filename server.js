//express routing for for node js
//app express to call it
var express = require("express");

//body parser to get back info in jason form
var bodyParser = require("body-parser");

var path =require("path");

var app = express();
var PORT= process.env.PORT || 8080;
 
 //enable files to be public
//app.use(express.static(path.join(__dirname, "../app/public")));

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('app/public'));


 /*
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
*/
//paths for api and html routes
require("./app/routing/apiRoutes.js")(app);
//include html routes in the sever.js to pass in
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
	//check server is running
	console.log("running! ON PORT: "+PORT);
});