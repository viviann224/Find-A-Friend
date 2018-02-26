//express routing for for node js
//app express to call it
var express = require("express");

//body parser to get back info in jason form
var bodyParser = require("body-parser");

var path =require("path");

var app = express();
var PORT= process.env.PORT || 8080;
 
 //enable files to be public
app.use(express.static(path.join(__dirname, "../app/public")));


 
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//paths for api and html routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

/*
// app.use('/static', express.static('public'));

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
  //res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

app.get("/home", function(req, res) {
  res.send("hello world");
});
/*
module.exports =function (app)
{
	app.get('/api/data', function (req,res)
	{
		res.json(friendData);
	});
}
//temp check*/

/*
//include html routes in the sever.js to pass in
require('../app/routing/htmlRoutes.js')(app);
*/
/*
app.listen(PORT, function(){
	//check server is running
	console.log("running! ON PORT: "+PORT);
});*/

app.listen(PORT, function(){
	//check server is running
	console.log("running! ON PORT: "+PORT);
});