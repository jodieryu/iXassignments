var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
 		controller: 'HomeCtrl',
 		templateUrl: 'templates/home.html'
 	})
  	$routeProvider.when('/movie/:imdbID', {
	 	controller: 'MovieCtrl',
	 	templateUrl: 'templates/movie.html'
	 })
 });

app.controller('HomeCtrl', function($scope, $http) {
	$scope.submit = function() {
	$http({
		url: "http://www.omdbapi.com/?",
		method: "GET",
		params: {
			s: $scope.search
		}

	}).then(function(response) {
		//console.log(response);
		$scope.movieArray = response.data.Search;
	})
}
});

app.controller('MovieCtrl', function($scope, $http, $routeParams) {
	$http({
        url: "http://www.omdbapi.com/",
        params: {
            i: $routeParams.imdbID
        }
    }).then(function(response) {
        console.log(response.data);
        $scope.movie = response.data;
    })

    $http({
    	url: "http://api.giphy.com/v1/gifs/search?",
    	method: "GET",
    	params: {
    		api_key: "dc6zaTOxFJmzC",
    		//q: $scope.search
    	}
    }).then(function(response) {
    	//console.log(response.data.data);
    	$scope.gifs = response.data.data;
    })
});
