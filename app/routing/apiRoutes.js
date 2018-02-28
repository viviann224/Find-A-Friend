var friendArray = require("../data/friends");

module.exports =function (app)
{	//when user uses this path go ahead and 
	//display the data from the API
	app.get("/api/data", function (req,res)
	{
		res.json(friendArray);
	});
	//when user uses this path go ahead and 
	//add data to the API
	app.post("/api/data", function(req, res) 
	{
      friendArray.push(req.body);
      res.json(true);  
	});
}