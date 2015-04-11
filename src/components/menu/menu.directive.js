angular.module('myapp').directive('myMenu',function(loginService, menu, $document){
  return {
    priority: 11,
    restrict: 'E',

    controller: function ($scope) {

      var userRole = loginService.getRole();
      var menuItems = menu.getitemsByRole(userRole);



      $scope.menuitems = menuItems;
    },
    scope: false,
    templateUrl: '/components/menu/menu.html',


    link: function($scope, $element, $attr, mainCtrl){



    }
  };
});
