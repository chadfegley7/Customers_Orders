//This is where we are going to designate our routes and how they should behave when they are called upon. This is where we are going to get our partials to show up and act as a single page application.
customerOrders_app.config(function($routeProvider){

	 $routeProvider
	 		.when('/', {
	 			templateUrl: './../static/partials/customerList.html',
	 			controller: "customersController"
	 		})
	        .when('/customers',{
	            templateUrl: './../static/partials/customerList.html',
	            controller: "customersController"
	        })
	        .when('/orders',{
	            templateUrl: './../static/partials/ordersList.html',
	            controller: "ordersController"
	        })

	        .otherwise({
	          redirectTo: '/'
	        });
})
