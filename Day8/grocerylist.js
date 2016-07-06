var app = angular.module('listApp', []); 

app.controller('ListCtrl', function($scope) {
  $scope.todos = [];
  
  $scope.addGrocery = function() {
    var newItem = {
      name: $scope.foodItem,
      quantity: $scope.quantity
    };

    console.log(newItem);
    $scope.todos.push(newItem);
    $scope.foodItem = "";
    $scope.quantity = "";
  };

  $scope.doAdd = function(todo) {
    var numX = parseInt(todo.quantity);
    //console.log(todo.quantity);
    todo.quantity = numX + 1;
  };

  $scope.doSubtract = function(todo) {
    var numY = parseInt(todo.quantity);
    //console.log(todo.quantity);
    todo.quantity = numY - 1;
  };

});