var mongoose = require("mongoose");

//Creating our new Schema and the rules for each new addition into that collection
var customerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.model("Customer", customerSchema);
