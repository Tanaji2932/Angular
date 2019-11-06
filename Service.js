var app = angular.module("MyApp");
app.service("MyService",function($q, $http){
	console.log("service loaded");

	this.myServiceFunction = function(){
		console.log("service function called");

		var deferred = $q.defer();

		$http.get("/getPremiumCall").then(function(response){
			deferred.resolve(response);
		}, function(error){
			deferred.reject(error);
		});
		return deferred.promise;
	}
});