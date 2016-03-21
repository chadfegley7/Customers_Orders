//Creating the orderFactory and passing the $http parameter to the function so we can pass data from the different partials
customerOrders_app.factory("orderFactory", function($http){
  var factory ={};
  var orders = [];

  //Using a GET request so we can pull all the orders from the DB
  factory.getOrders = function(callback){
    $http.get("/orders").success(function(output){
      orders = output;
      callback(orders);
    });
  }
  //Using a POST request so we can add a new order to our DB
  factory.addOrder = function(new_order, callback){
    $http.post("/addOrder", new_order).success(function(output){
      orders = output;
      callback(orders);
    })
  }
  return factory;
})
