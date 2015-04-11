'use strict';

angular.module('myapp')
  .config(function ($stateProvider, menuProvider) {

    var permissionOnly = ['user','admin'];

    $stateProvider
      .state('favorites', {
        url: '/favorites',
        templateUrl: 'app/favorites/favorites.tpl.html',
        controller: 'FavoritesCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        }
      });

    menuProvider.add('Избранное','favorites', permissionOnly, 30);
  });
