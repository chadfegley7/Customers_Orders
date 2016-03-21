//Setting up our MongoDB connection using mongoose.
var mongoose = require("mongoose");
var fs = require("fs");

//Connecting to the Database, with the last part being the name of the DB that you're going to be using 
mongoose.connect("mongodb://localhost/Ordering");

var models_path = __dirname + "/../models";

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf(".js") > 0){
    require(models_path + "/" + file);
  }
});
