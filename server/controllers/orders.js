//Server-side models to talk to our MongoDB
var mongoose = require("mongoose");
var Order = mongoose.model("Order");

module.exports = (function(){
  return{
    //This is going to go into our Order collection and find all of our orders and return them in a JSON Object.
    show: function(request, response){
      Order.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          response.json(results);
        }
      });
    },
    //This function will take a new order and set it up nicely so that we can insert the information into the DB. It's taking the information from the request sent from the form and converting that info into our DB.
    post: function(request, response){
      var new_order = new Order({name: request.body.name, product: request.body.product, qty: request.body.qty, created_at: request.body.created_at});
      new_order.save(function(err){
        if(err){
          console.log(new_order);
          console.log("Failed to add to database");
        }
        else{
          module.exports.show(request, response);
        }
      });
    }
  };
})();
