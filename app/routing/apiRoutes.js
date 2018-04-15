//import default list of friends to start
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

    //grabbing user's post data (from survey) and parsing it.
    var userData = req.body;
		//to find a match use scores to determine compatiblity
    var userScores = userData.scores;

    //totalDifference will be used to calculate the score of the current
		//friend against an old friend in the list
    var totalDifference;

    //run a loop to check all friends in the list
    for (var i = 0; i < friendArray.length; i++)
		{
      var currentFriend = friendArray[i];
      totalDifference = 0;
      //a nested for loop to compare each question from each friend
      for (var j = 0; j < currentFriend.scores.length; j++)
			{
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        //calculate the difference in each question from the new friend
				//compared to the current friend
        totalDifference += Math.abs(parseInt(currentUserScore)
				- parseInt(currentFriendScore));
			}
      //assume the best match is the lowest score.
			//if the totalDifferent between the current friend and the new friend is
			//lower, then set current friend as the best match
      if (totalDifference <= bestMatch.friendDifference)
			{
        //then go ahead and set the current friend to the most compatiable friend
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
				//once there is a match go ahead and add the newfriend to the friend list
		    friendArray.push(userData);
		    //and return the bestMatch for the new friend.
		    res.json(bestMatch);
	});
}
