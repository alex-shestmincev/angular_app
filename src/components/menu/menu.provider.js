angular.module('myapp').provider('menu',function MenuProvider(){

  var menuItems = [];
  var menuItemsByRole = [];
  var currentRole;

  this.add = function(title,state,permission,priority, is_active){

    is_active =  is_active || false;
    var id =  Math.random();

    if (angular.isArray(title)){
      var childs = [];
      for (var i = 0; i < title.length; i++) {

        if (i !== 0){
          parent = _.find(menuItems, function(obj) { return obj.title == title[i-1] });
          if (parent){
            parent.childs.push({'title': title[i], 'state': state, 'priority': priority, 'active': is_active, 'id': id, 'childs':[]});
          }
        }else{
          obj = _.find(menuItems, function(obj) { return obj.title == title[i] });

          if (!obj){
            var newItem = {
              'id' : id,
              'title' : title[0],
              'state' : state[0],
              'permission' : permission,
              'priority' : priority,
              'active' : is_active,
              'childs' : childs
            };
            menuItems.push(newItem);
          }


        }


      }
    }else{
      var newItem = {
        'id' : id,
        'title' : title,
        'state' : state,
        'permission' : permission,
        'priority' : priority,
        'active' : is_active,
        'childs': []

      };
      menuItems.push(newItem);
    }

  };



  this.$get = function(){
    return {
      getitems : function(){return menuItems; },
      getitemsByRole : function(role){return getItemsByRole(role);},
      setActive: function(id){return setActive(id);}
    }

  };




  // private methods
  function setActive(valId){
    disableAll(menuItems);

    var obj = findMenu(menuItems,{id:valId})[0];
    if (obj.childs.length > 0){
      obj.childs[0].active = true;
      return obj.childs[0];
    }else{
      obj.active = true;
      return obj;
    }
  }

  function disableAll(items){
    for(var i=0; i < items.length; i++ ){
      items[i].active = false;
      if (items[i].childs){
        disableAll(items[i].childs);
      }
    }
  }



  function findMenu(items,where){
    var res = [];
    res = res.concat(_.where(items, where));

    for(var i=0;i < items.length;i++){
      if (items[i].childs){
        res = res.concat(_.where(items[i].childs, where));
      }
    }

    return res;
  }

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

