'use strict';

angular.module('myapp', [ 'ui.router','permission','ui.bootstrap'])
  .config(function ($urlRouterProvider) {

    $urlRouterProvider.otherwise('/main/login');
  });


