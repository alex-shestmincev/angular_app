'use strict';

angular.module('myapp')
  .config(function ($stateProvider,menuProvider) {

    var permissionOnly = ['guest','user','admin'];

    $stateProvider
      .state('main.login', {
        url: '/login',
        templateUrl: 'app/main/login/login.html',
        controller: 'LoginCtrl',
        params: {'logout':false},
        data:{
          //permissions: {
            //only: permissionOnly
          //}
        }
      });

    menuProvider.add('Login','main.login', permissionOnly);

  }).run(function($rootScope,$state,loginService,Permission){

  Permission
    .defineRole('guest', function () {
      return loginService.isRole('guest') ? true : false;
    })
    .defineRole('user', function () {
      return loginService.isRole('user') ? true : false;
    })
    .defineRole('admin', function () {
      return loginService.isRole('admin') ? true : false;
    });

  $rootScope.$on('$changeStateError',function(){
    loginService.logOut();
    $state.go('login');
  });

});

