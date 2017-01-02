(function () {
'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope) {
    $scope.message = "";
    $scope.dishes = "";

    $scope.UpdateMessage = function () {
      var dishes = $scope.dishes.split(",");
      if (dishes.length > 3) {
        $scope.message = "Too much!";
      } else if (dishes == "") {
        $scope.message = "Please enter data first";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  }
})();
