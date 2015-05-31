angular.module('myapp').directive('myMenu',function(loginService, menu, $state){
  return {
    priority: 11,
    restrict: 'E',

    controller: function ($scope) {

      var userRole = loginService.getRole();
      $scope.menuitems = menu.getitemsByRole(userRole);

      $scope.activate = function(id){
        var obj = menu.setActive(id);
        if (obj){
            $state.go.apply(obj,obj.state);
        }
      }
    },
    scope: false,
    templateUrl: '/components/menu/menu.html',


    link: function($scope, $element, $attr, mainCtrl){



    }
  };
});
