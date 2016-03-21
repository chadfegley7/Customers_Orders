//Creating our module exports so that we can pass the data from our server-side to our routes so that they can communicate with each other and act accordingly.
var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");

module.exports = (function(){
  return{
    show: function(request, response){
      Customer.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          response.json(results);
        }
      });
    },

    post: function(request, response){
      var new_customer = new Customer({name: request.body.name, created_at: request.body.created_at});
      new_customer.save(function(err){
        if(err){
          casole.log("Failed to add to database!");
        }
        else{
          module.exports.show(request, response);
        }
      })
    },

    remove: function(request, response){
      Customer.remove({_id: request.body.id}, function(err){
        if(err){
          console.log("Failed to remove from database");
        }
        else{
          module.exports.show(request, response);
        }
      })
    }
  };
})();
