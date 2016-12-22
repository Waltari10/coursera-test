(function () {
'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "Valtteri";
    $scope.sayHello = function () {
      return "Hello coursera";
    };
  });


})();
