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
		//first create a bestMatch object to find the best bestMatch
		var bestMatch =
		{
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // Here we take the result of the user"s survey POST and parse it.
    var userData = req.body;

		//console.log(userData);
    var userScores = userData.scores;
		// Here we take the result of the user"s survey POST and parse it.




		    // This variable will calculate the difference between the user"s scores and the scores of
		    // each user in the database
		    var totalDifference;

		    // Here we loop through all the friend possibilities in the database.
		    for (var i = 0; i < friendArray.length; i++)
				{
		      var currentFriend = friendArray[i];
		      totalDifference = 0;

		      //console.log(currentFriend.name);

		      // We then loop through all the scores of each friend
		      for (var j = 0; j < currentFriend.scores.length; j++)
					{
		        var currentFriendScore = currentFriend.scores[j];
		        var currentUserScore = userScores[j];

		        // We calculate the difference between the scores and sum them into the totalDifference
		        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

					}
					console.log("total diff for "+ friendArray[i].name+ " "+totalDifference);
					console.log(totalDifference <= bestMatch.friendDifference);
		      // If the sum of differences is less then the differences of the current "best match"
		      if (totalDifference <= bestMatch.friendDifference)
					{
		        // Reset the bestMatch to be the new friend.
		        bestMatch.name = currentFriend.name;
		        bestMatch.photo = currentFriend.photo;
		        bestMatch.friendDifference = totalDifference;
		      }
		    }

		    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
		    // the database will always return that the user is the user's best friend).
		    friendArray.push(userData);
				console.log(bestMatch.name );
				console.log(bestMatch.photo);
				console.log(bestMatch.friendDifference) ;
		    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
		    res.json(bestMatch);

	});
}
