'use strict';

angular.module('myapp')
  .config(function ($stateProvider, menuProvider) {

    var permissionOnly = ['user','admin'];

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        }
      });



    menuProvider.add(['Мои объявления','Активные'],['','main'], permissionOnly);
    menuProvider.add('Сообщения','main.letters', permissionOnly);
    menuProvider.add('Избранное','main.izbrannoe', permissionOnly);
    menuProvider.add('Помощь и поддержка','main.support', permissionOnly);
    menuProvider.add('Выход','main.login({logout:true})', permissionOnly);

  });
