angular.module('myapp').provider('menu',function MenuProvider(){

  var menuItems = [];
  var menuItemsByRole = [];
  var currentRole;

  this.add = function(title,state,permission){


    if (angular.isArray(title) && angular.isArray(state)){
      var childs = [];
      for (var i = 0; i < title.length; i++) {

        if (i !== 0){
          parent = _.find(menuItems, function(obj) { return obj.title == title[i-1] });
          if (obj){
            parent.childs.push({'title': title[i], 'state': state[i]});
          }
        }else{
          obj = _.find(menuItems, function(obj) { return obj.title == title[i] });

          if (!obj){
            var newItem = {
              'title' : title[0],
              'state' : state[0],
              'permission' : permission,
              'childs' : childs
            };
            menuItems.push(newItem);
          }


        }


      }





      console.log(menuItems);

    }else{
      var newItem = {
        'title' : title,
        'state' : state,
        'permission' : permission,
        'childs': []
      };
      menuItems.push(newItem);
    }





  }

  this.$get = function(){
    return {
      getitems : function(){return menuItems; },
      getitemsByRole : function(role){return getItemsByRole(role);}
    }

  }

  // private methods
  function getItemsByRole(role){

    if (menuItemsByRole == false || currentRole != role) {
      menuItemsByRole = [];
      currentRole = role;
        menuItems.forEach(function (item) {
        if (item.permission.indexOf(role) >= 0) {
          menuItemsByRole.push(item);
        }
      });
    }

    return menuItemsByRole;
  }
  // private methods

});

