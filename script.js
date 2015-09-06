
var myCalcModule = angular.module('myCalc', []);

myCalcModule.controller('CalcController', function($scope) {
  
  $scope.someInput = 0;
  
  var store = { 
      g_result: 0,
      g_last_operator: "",
      g_is_operator_last_pressed: false
  };

  $scope.number = function(number) {
    var current_number = number;
    var old_number = $scope.someInput;
    var new_number = "";
  
    if (old_number == "0" || store.g_is_operator_last_pressed) {
      new_number = number;
    }
    else {
      new_number = old_number.toString() + number.toString();
    }
    
    $scope.someInput = new_number;
    store.g_is_operator_last_pressed = false;
  };
  
  $scope.operator = function(value) {
    var number = parseFloat($scope.someInput);
    
    if (store.g_last_operator === "") {
      store.g_result = number;
    } else if (store.g_is_operator_last_pressed && store.g_last_operator === '=' ) {
      store.g_result = number;
    } else {
      var result = 0;
      if (store.g_last_operator === '+') {
        result = store.g_result + number;
      } else if (store.g_last_operator === '-') {
        result = store.g_result - number;
      } else if (store.g_last_operator === 'x') {
        result = store.g_result * number;
      } else if (store.g_last_operator === '/') {
        result = store.g_result / number;
      } else if (store.g_last_operator === '%') {
        result = store.g_result / 100;
      }
      store.g_result = result;
      $scope.someInput = result;
    }
    store.g_last_operator = value;
    store.g_is_operator_last_pressed = true;
  };
  
  $scope.clear = function() {
    $scope.someInput = 0;
    store.g_result = 0;
    store.g_last_operator = "";
    store.g_is_operator_last_pressed = false;
  }
  
});



