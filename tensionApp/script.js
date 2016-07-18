var app = angular.module('tensionApp',['ngRoute', 'firebase']);

app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: "ListCtrl",
		templateUrl: "/templates/list.html",
		resolve: {
      		// controller will not be loaded until $waitForSignIn resolves
      		"currentAuth": function($firebaseAuth) {
        	// $waitForSignIn returns a promise so the resolve waits for it to complete
        		return $firebaseAuth().$requireSignIn();
      		}
   	 	}
	})
	$routeProvider.when('/channel/:channelId', {
		controller: "ChannelCtrl",
		templateUrl: "templates/channel.html",
		resolve: {
      		// controller will not be loaded until $waitForSignIn resolves
      		"currentAuth": function($firebaseAuth) {
        	// $waitForSignIn returns a promise so the resolve waits for it to complete
        		return $firebaseAuth().$requireSignIn();
      		}
   	 	}
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

app.controller("ListCtrl", function(currentAuth, $scope, $firebaseAuth, $firebaseObject, $location) {
	$scope.curUser = currentAuth;

	var ref = firebase.database().ref().child('channels');
	$scope.channels = $firebaseObject(ref);

	$scope.addChannel = function() {
		$scope.channels[$scope.newChannelId] = {
			'name': $scope.newChannelName,
			'description': $scope.newChannelDescription
		};
		$scope.channels.$save();
	$scope.newChannelName = "";
	$scope.newChannelId = "";
	$scope.newChannelDescription = "";
	};

	$scope.firebaseUser = $firebaseAuth();
	var auth = $firebaseAuth();
	$scope.signOut = function() {
		auth.$signOut();
		$location.path("/login");
	}
	
});

app.controller("ChannelCtrl", function(currentAuth, $scope, $routeParams, $firebaseObject, $firebaseArray) {
	var ref = firebase.database().ref().child('messages').child($routeParams.channelId);
	
	$scope.curUser = currentAuth;
	console.log($scope.curUser.uid);

	var usersRef = firebase.database().ref().child('users');
	$scope.users = $firebaseObject(usersRef);

	//create a synchronized array
	$scope.messages = $firebaseArray(ref);
	//add new items to the array
	//the message is automatically added to firebase database!
	$scope.sendMessage = function() {
		$scope.messages.$add({
			sender: $scope.curUser.uid,
			text: $scope.newMessage,
			created_at: Date.now()
		});
	$scope.newMessage = "";
	//$scope.userName = "";
	};
});

app.controller("SignupCtrl", function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, $window) {
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
            //console.log($scope.users);
            
            $scope.users.name = $scope.name;
            $scope.users.email = $scope.email;
            $scope.users.password = $scope.password;
            
            $scope.users.$save();
            $scope.name = "";
            $scope.email = "";
            $scope.password = "";

            $window.location.href = "#/";

  			}).catch(function(error) {
    			console.error("Error: ", error);
  			});
	};
});

app.controller("LoginCtrl", function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, $window) {
	$scope.authObj = $firebaseAuth();

	$scope.login = function() {
		$scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.password)
		.then(function(firebaseUser) {
  		console.log("Signed in as:", firebaseUser.uid);
  		$window.location.href = "#/";

		}).catch(function(error) {
  		console.error("Authentication failed:", error);
	});

	}
})

