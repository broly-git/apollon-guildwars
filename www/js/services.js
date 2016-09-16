angular.module('starter.services', []).factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('apiGW2', function($http) {

    var getGW2ApiData = function () {

        var  getMapIdList = $http.get("https://api.guildwars2.com/v2/maps/").then(function(response){;
          return response.data;
        }, function(err){
          return err;
        });

      return infosMaps = getMapIdList.then(
        function(mapIdList) {

            var tabPromise = [];

            function getMapInfos(idMap){
              var url = "https://api.guildwars2.com/v2/maps/" + idMap

              return promise = $http.get(url).then(function (response) {
                 console.log(response);
                return response;
              }, function (err) {
                return err;
              });
            }

            for (i = 0; i < 60; i++) {
              tabPromise[i]  = getMapInfos(mapIdList[i])
            }

            return getAllMapsInfos = Promise.all(tabPromise).then(
              function(allMapData){
                return allMapData;
              }
            );

          }
        );

  }

  return {
    allMapsInfos: getGW2ApiData
  };
});
