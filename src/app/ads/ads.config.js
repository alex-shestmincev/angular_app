'use strict';

angular.module('myapp')
  .config(function ($stateProvider, menuProvider) {

    var permissionOnly = ['user','admin'];

    $stateProvider
      .state('ads', {
        url: '/ads/:type',
        templateUrl: 'app/ads/ads.tpl.html',
        controller: 'AdsCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        },
        params: {'type':'active'}
      });



    menuProvider.add(['Мои объявления','Активные'],['','ads'], permissionOnly);
    menuProvider.add(['Мои объявления','Скрытые'],['','ads({type:hidden})'], permissionOnly);
    menuProvider.add(['Мои объявления','Корзина'],['','ads(type:deleted)'], permissionOnly)

    ;
    //menuProvider.add('Сообщения','main.letters', permissionOnly);
    //menuProvider.add('Избранное','main.izbrannoe', permissionOnly);
    //menuProvider.add('Помощь и поддержка','main.support', permissionOnly);


  });
