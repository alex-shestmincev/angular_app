angular.module('myapp').provider('menu',function MenuProvider(){

  var menuItems = [];
  var menuItemsByRole = [];
  var currentRole;

  this.add = function(title,state,permission,priority){


    if (angular.isArray(title) && angular.isArray(state)){
      var childs = [];
      for (var i = 0; i < title.length; i++) {

        if (i !== 0){
          parent = _.find(menuItems, function(obj) { return obj.title == title[i-1] });
          if (parent){
            parent.childs.push({'title': title[i], 'state': state[i], 'priority': priority, 'active':0});
          }
        }else{
          obj = _.find(menuItems, function(obj) { return obj.title == title[i] });

          if (!obj){
            var newItem = {
              'title' : title[0],
              'state' : state[0],
              'permission' : permission,
              'priority' : priority,
              'active' : 0,
              'childs' : childs
            };
            menuItems.push(newItem);
          }


        }


      }
    }else{
      var newItem = {
        'title' : title,
        'state' : state,
        'permission' : permission,
        'priority' : priority,
        'active' : 0,
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

  this.setActive = function(sref){

    obj_deact = _.find(menuItems, function(obj) { return obj.active == 1 });
    if (obj_deact){ obj_deact.active = 0; }

    obj = _.find(menuItems, function(obj) { return obj.state == sref });
    if (obj){ obj.active = 1;}


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

