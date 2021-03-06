var app = angular.module('listApp', []); 

app.controller('ListCtrl', function($scope) {
  $scope.foodItem = "";
  $scope.newItemQuantity = "";
  $scope.todos = [];
  
  $scope.addGrocery = function() {
    /*var newItem = {
      name: $scope.foodItem,
      quantity: $scope.quantity
    };
    //console.log(newItem);
    $scope.todos.push(newItem);
    $scope.foodItem = "";
    $scope.quantity = "";*/
    var repeat = false;
    for(var i = 0; i < $scope.todos.length; i++) {
      if($scope.todos[i].name.lowercase === $scope.foodItem.lowercase) {
        $scope.todos[i].quantity = parseInt($scope.todos[i].quantity,10) + parseInt($scope.newItemQuantity,10);
        repeat = true;
      }
    }
    if(!repeat) {
      var item = {
        "name": $scope.foodItem,
        "quantity":$scope.newItemQuantity,
        "isEditing": false
      };
      $scope.todos.push(item);
      $scope.foodItem = "";
      $scope.newItemQuantity = "";
    }
  };

  $scope.doAdd = function(todo) {
    var numX = parseInt(todo.quantity,10);
    //console.log(todo.quantity);
    todo.quantity = numX + 1;

  };

  $scope.doSubtract = function(todo) {
    var numY = parseInt(todo.quantity);
    //console.log(todo.quantity);
    todo.quantity = numY - 1;
    if (todo.quantity <= 0) {
      $scope.doRemove(todo);
    }
  };

  $scope.doRemove = function(todo) {
    var index = $scope.todos.indexOf(todo);
    $scope.todos.splice(index, 1); 
  };
  /*slice = on array removes things at [i] position and 
  1 of the [i] position*/

  $scope.emptyCart = function() {
    $scope.todos = []
  };

});