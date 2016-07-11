var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/show/:id', {
 		controller: 'MovieController',
 		templateUrl: 'templates/movie.html',
 	})
  	$routeProvider.when('/results', {
	 	controller: 'ResultsCtrl',
	 	templateUrl: 'templates/results.html',
	 })
 });

app.controller('MainCtrl', function($scope, $http, $location, movieArray) {
	$scope.submit = function(search) {
		$http({
			url: "http://www.omdbapi.com/?s=" + search.text,
			method: "GET",

		}).then(function(response) {
			console.log(response);
			movieArray.movies = response.data.Search;
			$location.path('/results');
		})
	};
});

app.controller('MovieController', function($scope, $http, $routeParams, $location) {
  $http({
    	url: 'http://www.omdbapi.com/?i=' + $routeParams.id + '&plot=full&r=json',
    	method: "GET"

    }).then(function(movie) {
      $scope.details = ["Title", "Year", "Rated", "Released", "Runtime", "Genre", "Director", "Writer", "Awards", "Metascore", "imdbVotes"]
      $scope.movie = movie.data;
    })
});



// app.controller('ResultsCtrl', function($scope, $routeParams, $location, movieService) {
//   $scope.results = movieService.movies;
// });

// app.service('movieService', function() {
//   return {
//     movies : []
//   }
// });
