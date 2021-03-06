/**
 * Created by servi on 15/09/2016.
 */
angular.module('starter.controllers', [])


  .controller('GooMapCtrl', function($scope, $state, $cordovaGeolocation) {
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){


      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
        center: latLng,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      google.maps.event.addListenerOnce($scope.map, 'idle', function(){

        var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng
        });

      });
    }, function(error){
      console.log("Could not get location");
    });
  })


  .controller('infoMapGW2Ctrl', function($scope,apiGW2) {
    var allMapsInfos = apiGW2.allMapsInfos().then(function(tab){
      $scope.allMapsInfos = tab;

      // tab.forEach(function(allMapData) {
      //    console.log(allMapData.data)
      // });

    });
  })


.controller('parametersCtrl', function($scope,$cordovaBatteryStatus,$rootScope,$ionicPlatform) {

  $ionicPlatform.ready(function(){
    $rootScope.$on("$cordovaBatteryStatus:status", function(event, args){
      $scope.batteryLevel = args.level;
      $scope.isPluggedIn = args.isPlugged;
      if(args.isPlugged)
      {
        alert("Portable branché, vous chargez -> " + args.level + " %");
      }
      else
      {
        alert("Vous venez de débrancher votre portable, vous êtes maintenant sur la batterie !  -> " + args.level + " %");
      }
      $scope.percentageStyle = {
        width : $scope.batteryLevel
      };
    });
  });

  

});




