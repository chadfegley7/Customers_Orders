//Creating our customersController for our client-side, using $scope data and our customerFactory that is storing our information
customerOrders_app.controller("customersController", function($scope, customerFactory){
  $scope.customers =[];
  $scope.duplicate = "";
  customerFactory.getCustomers(function(data){
    $scope.customers = data;
  });

  //Adding a new customer to our DB using $scope information that was passed as a parameter.
  $scope.addCustomer = function(){
    if($scope.isDuplicate()){
      $scope.duplicate = "Can't Add Name, Already Exists!";
    }
    else{
      $scope.new_customer.created_at = new Date();
      customerFactory.addCustomer($scope.new_customer, function(data){
        $scope.customer = data;
        $scope.new_customer = {};
      });
    }
  }
  
  //Removing a customer from our DB
  $scope.removeCustomer = function(customer){
    customerFactory.removeCustomer(customer, function(data){
      $scope.customers = data
    });
  }

  //Checking to see if there are any duplicates in our DB before we enter the new customer into our DB
  $scope.isDuplicate = function(){
    for(var i = 0; i < $scope.customers.length; i++){
      if($scope.new_customer !== undefined){
        if($scope.new_customer.name == $scope.customers[i].name){
          $scope.duplicate = "Name Already Exists!"
          return true;
        }
      }
    }
    return false;
  }
});
