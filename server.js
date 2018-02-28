//express routing for for node js
//app express to call it
var express = require("express");
//body parser to get back info in jason form
var bodyParser = require("body-parser");
//grabbing path npm to create specific paths for server
var path =require("path");
var app = express();
//picking a specific port
var PORT= process.env.PORT || 8080;
 
// BodyParser forserver to interpret data sent
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 
//enable files to be public
app.use(express.static('app/public'));
//needs middleware to double check paths will go through shorly

//paths for api and html routes
require("./app/routing/apiRoutes.js")(app);
//include html routes in the sever.js to pass in
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
	//check server is running
	console.log("running! ON PORT: "+PORT);
});