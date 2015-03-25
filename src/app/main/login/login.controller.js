'use strict';

angular.module('myapp')
  .controller('LoginCtrl', function ($scope,$state,loginService,menu) {

    if($state.params.logout === true){
      loginService.logOut();
    }else if(loginService.getUser()){
      $state.go('main');
    }

    $scope.username = '';
    $scope.password = '';

    $scope.Login = function(){
      var res = loginService.logIn($scope.username,$scope.password);


      if (res){
        $state.go('main');
      }else{
        console.log("bad login");
      }
    }

  });
