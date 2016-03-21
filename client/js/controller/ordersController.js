//Bringing in our ordersController and passing the function 3 parameters so we can start making connections in the database between our customers and what they order.
customerOrders_app.controller("ordersController", function(orderFactory, customerFactory, $scope){
  $scope.orders = [];
  $scope.products = ["PS4", "Jordans", "TV", "Nintendo64", "Oculus Rift"];
  $scope.users = [];
  $scope.new_order = {};
  $scope.user_names = [];

  //Using the orderFactoryfactory to retrieve all of our orders.
  orderFactory.getOrders(function(data){
    $scope.orders = data;
  });

  //Using the customerFactory to grab all of our customers in our DB
  customerFactory.getCustomers(function(data){
    $scope.users = data;
    for(var i = 0; i < $scope.users.length; i++){
      $scope.user_names.push($scope.users[i].name);
    }
  });

  //Now we're going to use our $scope data to add a new order to the DB.
  $scope.addOrder = function(){
    $scope.new_order.created_at = new Date();
    orderFactory.addOrder($scope.new_order, function(data){
      $scope.orders = data;
      $scope.new_order = {};
    });
  }
})
