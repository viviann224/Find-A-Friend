var path =require("path");

module.exports = function(app) {
	//route to main page
	app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  //route to survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

	// If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};