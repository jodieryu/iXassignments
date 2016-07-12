var app = angular.module('iXCApp',['ngRoute']);
var CHOMMIES_TOKEN = "eb159625814431183717fe3a2e110e71";

app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: "FeedCtrl",
		templateUrl: "/templates/feed.html"
	})
	$routeProvider.when('/me', {
		templateUrl: "/templates/me.html"
	})
});

app.controller("FeedCtrl", function($scope, $http) {
	$scope.loadData = function() {
		$http({
			url: "http://ixchommies.herokuapp.com/props",
			method: "GET",
			params: {
				token: CHOMMIES_TOKEN
			}
		}).then(function(response) {
			console.log(response);
			$scope.props = response.data;
		});

		$http({
			url: "http://ixchommies.herokuapp.com/brus",
			method: "GET",
			params: {
				token: CHOMMIES_TOKEN
			}
		}).then(function(response) {
			console.log(response);
			$scope.brus = response.data;
		});

		$scope.sendProps = function() {
			console.log($scope.sendProps);
			$http({
				url: "http://ixchommies.herokuapp.com/props",
				method: "POST",
				params: {
					token: CHOMMIES_TOKEN
				},
				data: {
					for: $scope.selectedBru.id, //newProp.receiver.id 
					props: $scope.newPropsValue //newProp.text
				}
			}).then(function(response) {
				console.log(response);
				$scope.props.push(response.data);
				$scope.newPropsValue= {}; //????
			}).catch(function(response) {
				$scope.errorMsg = response.data.message;
			});
		}
	}
	$scope.loadData();
});

app.controller("MeCtrl", function($scope, $http) {
	$http({
		url: "http://ixchommies.herokuapp.com/brus",
		method: "GET",
		params: {
			token: CHOMMIES_TOKEN
		}
	}).then(function(response) {
		$scope.brus = response.data;
	});

	$http({
		url: "http://ixchommies.herokuapp.com/props/me",
		method: "GET",
		params: {
			token: CHOMMIES_TOKEN
		}
	}).then(function(response) {
		$scope.props = response.data;
	});
})

