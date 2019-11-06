var app = angular.module("MyApp",[]);
app.controller("MyController",function($scope, MyService){
	console.log("controller loaded");

	$scope.data = {};	
	$scope.data.name = "tanhaji";
	$scope.data.number = 8855850686;

	$scope.myFunction = function(data){
		console.log("function called",data);
		MyService.myServiceFunction().then(
			function(response){
				console.log(response);
			},function(error){
				console.log(error);
			});
	}

});