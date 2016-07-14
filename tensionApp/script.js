var app = angular.module('tensionApp',['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: "ChannelCtrl",
		templateUrl: "/templates/channel.html"
	})
});

app.controller("ChannelCtrl", function($scope, $firebaseObject, $firebaseArray) {
	var ref = firebase.database().ref().child('messages');
	//create a synchronized array
	$scope.messages = $firebaseArray(ref);
	//add new items to the array
	//the message is automatically added to firebase database!
	$scope.sendMessage = function() {
		$scope.messages.$add({
			sender: $scope.userName,
			text: $scope.newMessage,
			created_at: Date.now()
		});
	$scope.newMessage = "";
	$scope.userName = "";
	};
});
