
angular.module('app')
  .factory('itemData', function() {

    var items = [
      {id: 1, name: 'first'},
      {id: 2, name: 'second'},
      {id: 3, name: 'third'},
      {id: 4, name: 'fourth'},
      {id: 5, name: 'fifth'}
    ];

    return {
      items: items
    }
  });





