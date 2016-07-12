var app = angular.module('iXCApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: "FeedCtrl",
		templateUrl: "/templates/feed.html"
	})
});

app.controller("FeedCtrl", function($scope, $http) {
	$http({
		url: "http://ixchommies.herokuapp.com/props",
		method: "GET",
		params: {
			token: "eb159625814431183717fe3a2e110e71"
		}
	}).then(function(response) {
		console.log(response);
		$scope.props = response.data;
	});

	$http({
		url: "http://ixchommies.herokuapp.com/brus",
		method: "GET",
		params: {
			token: "eb159625814431183717fe3a2e110e71"
		}
	}).then(function(response) {
		console.log(response);
		$scope.brus = response.data;
	});
});