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
        params: {type:'active'}
      });


    menuProvider.add('Мои объявления','ads({type:"active"})', permissionOnly,10);
    menuProvider.add(['Мои объявления','Активные'],['','ads({type:"active"})'], permissionOnly,11);
    menuProvider.add(['Мои объявления','Скрытые'],['','ads({type:"hidden"})'], permissionOnly, 12);
    menuProvider.add(['Мои объявления','Корзина'],['','ads({type:"deleted"})'], permissionOnly, 13);
    //menuProvider.add('Сообщения','letters', permissionOnly, 20);

    //menuProvider.setActive('letters');

    //menuProvider.add('Избранное','main.izbrannoe', permissionOnly);
    //menuProvider.add('Помощь и поддержка','main.support', permissionOnly);


  });
