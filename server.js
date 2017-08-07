var express = require("express");
var app = express();
var path = require("path");


var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8900;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));


app.use(express.static(path.join(__dirname, "public")));



require("./routing/htmlRoutes.js")(app)



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});