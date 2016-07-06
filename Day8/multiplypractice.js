var app = angular.module('calculatorApp', []);

app.controller('CalculatorCtrl', function($scope) {
	$scope.doMultiply = function() {
		var numX = parseInt($scope.x);
		var numY = parseInt($scope.y);
		$scope.result = numX * numY;
	};

	$scope.doAdd = function() {
		var numX = parseInt($scope.x);
		var numY = parseInt($scope.y);
		$scope.result = numX + numY;
	};
});