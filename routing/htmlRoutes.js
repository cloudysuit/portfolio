var path = require("path");

module.exports = function(app){


	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "/../index.html"));
	

	});
	

	app.get("/grumble", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/pieces/grumble.html"));
	});

	app.get("/huntGather", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/pieces/huntGather.html"));
	});

	app.get("/moon", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/pieces/moon.html"));
	});

	app.get("/buffy", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/pieces/buffy.html"));
	});

	app.get("/gifReact", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/pieces/gifReact.html"));
	});

	app.get("/train", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/pieces/train.html"));
	});
}