var app = angular.module('petitionsApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/petition/:petitionId', {
		controller: 'PetitionCtrl',
		templateUrl: 'templates/petition.html',
	})
});

app.controller('MainCtrl', function($scope, $http) {
	$http({
		url: "https://api.whitehouse.gov/v1/petitions.json",
		method: "GET",
		params: {
			title: "Education"
		}
	}).then(function(response) {
		console.log(response);
		$scope.petitionsArray = response.data.results;
	})
});

app.controller('PetitionCtrl', function($scope, $http, $routeParams) {
	$http({
		url: "https://api.whitehouse.gov/v1/petitions/" + 
			$routeParams.petitionId +".json",
		method: "GET"
	}).then(function(response) {
		// console.log(response);
		$scope.petition = response.data.results[0];
	})
});