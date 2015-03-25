'use strict';

angular.module('myapp')
  .controller('MenuCtrl', function ($scope,menu,loginService,$rootScope) {


    var userRole = loginService.getRole();

    var menuItems = menu.getitemsByRole(userRole);


    $rootScope.menuitems = menuItems;
    $rootScope.userRole = userRole;


  });
