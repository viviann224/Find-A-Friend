var friendArray = require("../data/friends");

module.exports =function (app)
{	//returns data
	app.get("/api/data", function (req,res)
	{
		res.json(friendArray);
	});

	app.post("/api/data", function(req, res) 
	{
	    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
	    // It will do this by sending out the value "true" have a table
	    // req.body is available since we're using the body-parser middleware

	      friendArray.push(req.body);
	      res.json(true);
	   
	  });
	//need to add post code for the server to respond to request
	//if(friendArray.length>=0)
	//friendArray.push(req.body);
	//res.json(true);
	//else
	//res.json(false);


	//clear post to drive a delete fx
}