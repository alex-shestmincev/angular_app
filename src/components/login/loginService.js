angular.module('myapp').factory('loginService',['$q',function($q){

  var user;
  var userRole;

  function getUser(){
    user = localStorage.getItem('username');
    return user;// ? $q.when(user) : $q.reject();
  }

  function getRole(){
    user = getUser();

    if (user === 'admin'){
      userRole = 'admin';
    }else if(user.length > 0){
      userRole = 'user';
    }else{
      userRole = 'guest';
    }
    return userRole;
  }

  function isRole(role){
    var user_role = getRole();
    return user_role === role;
  }

  function logIn(username,password){
    var username = username ? username.trim() : '';
    var password = password ? password.trim() : '';
    var password_check = username.split('').reverse().join('');

    if (username.length > 0 && password.length && password === password_check){
      localStorage.setItem('username',username);
      userRole = getRole();
      return true;
    }else{
      return false;
    }
  }

  function logOut(){
    user = localStorage.setItem('username','');
    userRole = getRole();
  }

  // private methods



  // private methods

  return {
    getUser : getUser,
    logOut : logOut,
    logIn : logIn,
    getRole: getRole,
    isRole : isRole
  }

}]);
