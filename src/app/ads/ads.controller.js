'use strict';

angular.module('myapp')
  .controller('AdsCtrl', function ($scope,$state,menu) {

    $scope.type = $state.params.type;

    console.log($state.params);

  });
