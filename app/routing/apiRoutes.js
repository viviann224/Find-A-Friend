var friendArray = require("../data/friends");

module.exports =function (app)
{	//returns data
	app.get("/api/data", function (req,res)
	{
		res.json(friendArray);
	});

	//need to add post code for the server to respond to request
	//if(friendArray.length>=0)
	//friendArray.push(req.body);
	//res.json(true);
	//else
	//res.json(false);
}