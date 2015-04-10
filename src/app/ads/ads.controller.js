'use strict';

angular.module('myapp')
  .controller('AdsCtrl', function ($scope,$state) {

    $scope.type = $state.params.type;

  });
