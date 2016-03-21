//Creating our Angular Module with out customerFactory info
var customerOrders_app = angular.module("customerOrders_app", ["ngRoute"]);

//Creating the customerFactory
customerOrders_app.factory("customerFactory", function($http){
  var factory = {};
  var customers = [];

  //Retrieving the customers from our GET request using the $http directive
  factory.getCustomers = function(callback){
    $http.get("/customers").success(function(output){
      customers = output;
      callback(customers);
    });
  }

  //Adding a new customer into our DB from the POST request sent by our form using the $http directive
  factory.addCustomer = function(new_customer, callback){
    $http.post("/addCustomer", new_customer).success(function(output){
      customers = output;
      callback(customers);
    });
  }
  //Deleting a customer from our DB using a POST request and the $http directive
  factory.deleteCustomer = function(customer, callback){
    $http.post("/removeCustomer", customer).success(function(output){
      customers = output;
      callback(customers);
    })
  }

  return factory;
});
