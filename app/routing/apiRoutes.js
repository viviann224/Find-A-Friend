var friendArray = require("../data/friends");

module.exports =function (app)
{
	app.get("/api/data", function (req,res)
	{
		res.json(friendArray);
	});
}