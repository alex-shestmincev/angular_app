'use strict';

angular.module('myapp')
  .config(function ($stateProvider, menuProvider) {

    var permissionOnly = ['user','admin'];

    $stateProvider
      .state('letters', {
        url: '/letters',
        templateUrl: 'app/letters/letters.tpl.html',
        controller: 'LettersCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        }
      });

    menuProvider.add('Сообщения',['letters'], permissionOnly, 20);
  });
