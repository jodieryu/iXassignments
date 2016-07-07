var app = angular.module('nytimesApp', []);
var NY_TIMES_API_KEY = 'accbd32686e940648fe30f9419c2fa4c';

// app.controller('MainCtrl', function($scope, $http) {
// 	$http({
// 		url: "https://api.nytimes.com/svc/topstories/v2/opinion.json",
// 		method: 'GET',
// 		params: {
// 			'api-key': NY_TIMES_API_KEY
// 		}
// 	}).then(function(response) {
// 		console.log(response);
// 		$scope.articles = response.data.results;
// 	});
// });

app.controller('SearchCtrl', function($scope, $http) {
	$scope.searchTerm = "";
	$scope.searchAPI = function() {
		console.log("search clicked");
		// Code for search here.
		$http({
			url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
			method: 'GET',
			params: {
				'api-key': NY_TIMES_API_KEY,
				'q': $scope.searchQuery
			}
		}).then(function(response) {
			console.log(response);
			$scope.articles = response.data.results;
		});
	};
});
// app.controller('SearchCtrl', function($scope, $http){
// 	$scope.$watch('searchQuery', function() {
//   		fetch();
// 	});
// 	$scope.search = "";

//     function fetch() {
//       $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
//         .then(function(response) {
//           $scope.details = response.data;
//         });
//     }
//   });