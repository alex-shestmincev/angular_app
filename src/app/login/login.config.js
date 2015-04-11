'use strict';

angular.module('myapp')
  .config(function ($stateProvider,menuProvider) {

    var permissionOnly = ['guest','user','admin'];

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.tpl.html',
        controller: 'LoginCtrl',
        params: {'logout':false},
        data:{
          //permissions: {
            //only: permissionOnly
          //}
        }
      });

    menuProvider.add('Login','login', ['guest'], 1);

    menuProvider.add('Выход','login({logout:true})', ['user','admin'], 99);

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

