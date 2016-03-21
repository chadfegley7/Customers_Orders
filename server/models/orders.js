var mongoose = require("mongoose");

//Creating our Order Schema and setting the rules for each new addition to our DB
var orderSchema = new mongoose.Schema({
  name: {type: String, required: true},
  product: {type: String, required: true},
  qty: {type: Number},
  created_at: {type: Date, default: Date.now}
});

mongoose.model("Order", orderSchema);
