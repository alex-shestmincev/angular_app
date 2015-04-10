'use strict';

angular.module('myapp', [ 'ui.router','permission','ui.bootstrap','angular-lodash'])
  .config(function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
  });


