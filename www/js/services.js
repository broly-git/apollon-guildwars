angular.module('starter.services', [])

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
