var app = angular.module('tensionApp',['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: "ListCtrl",
		templateUrl: "/templates/list.html"
	})
	// $routeProvider.when('/', {
	// 	controller: "ChannelCtrl",
	// 	templateUrl: "/templates/channel.html"
	// })
	$routeProvider.when('/channel/:channelId', {
		controller: "ChannelCtrl",
		templateUrl: "templates/channel.html"
	})
	$routeProvider.when('/signup', {
		controller: "SignupCtrl",
		templateUrl: "templates/signup.html"
	})
	$routeProvider.when('/login', {
		controller: "LoginCtrl",
		templateUrl: "templates/login.html"
	})
});

app.controller("ListCtrl", function($scope, $firebaseObject) {
	var ref = firebase.database().ref().child('channels');
	$scope.channels = $firebaseObject(ref);

	$scope.addChannel = function() {
		$scope.channels[$scope.newChannelId] = {
			'name': $scope.newChannelName,
			'description': $scope.newChannelDescription
		};
		$scope.channels.$save();
	};
});

app.controller("ChannelCtrl", function($scope, $routeParams, $firebaseObject, $firebaseArray) {
	var ref = firebase.database().ref().child('messages')//.child($routeParams.channelId);
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

app.controller("SignupCtrl", function($scope, $firebaseObject, $firebaseArray, $firebaseAuth) {
	$scope.authObj = $firebaseAuth();

	$scope.signUp = function() {
		console.log($scope.name);
		console.log($scope.email);
		console.log($scope.password);

		$scope.authObj.$createUserWithEmailAndPassword($scope.email, $scope.password)
  			.then(function(firebaseUser) {
    		console.log("User " + firebaseUser.uid + " created successfully!");

  			var ref = firebase.database().ref().child('users').child(firebaseUser.uid);
            $scope.users = $firebaseObject(ref);
            //console.log("printing out the user object");
            console.log($scope.users);
            
            $scope.users.name = $scope.name;
            $scope.users.email = $scope.email;
            $scope.users.password = $scope.password;
            
            $scope.users.$save();
            $scope.name = "";
            $scope.email = "";
            $scope.password = "";

  			}).catch(function(error) {
    			console.error("Error: ", error);
  			});
	};
});

app.controller("LoginCtrl", function($scope, $firebaseObject, $firebaseArray, $firebaseAuth) {
	$scope.authObj = $firebaseAuth();

	$scope.login = function() {
		$scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.password)
		.then(function(firebaseUser) {
  		console.log("Signed in as:", firebaseUser.uid);

		}).catch(function(error) {
  		console.error("Authentication failed:", error);
	});

	}
})

