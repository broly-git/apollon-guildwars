// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('tabs.google-map', {
        url: "/google-map",
        views: {
          'google-map-tab': {
            templateUrl: "templates/google-map.html",

          }
        }
      })
      .state('tabs.google-map-map', {
        url: "/google-map-map",
        views: {
          'google-map-tab': {
            templateUrl: "templates/google-map-map.html",
            controller: 'GooMapCtrl'
          }
        }
      })
      .state('tabs.developpeur', {
        url: "/developpeur",
        views: {
          'info-tab': {
            templateUrl: "templates/developpeur.html"
          }
        }
      })
      .state('tabs.servino', {
        url: "/servino",
        views: {
          'info-tab': {
            templateUrl: "templates/servino.html"
          }
        }
      })
      .state('tabs.propos', {
        url: "/propos",
        views: {
          'info-tab': {
            templateUrl: "templates/propos.html"
          }
        }
      })
      .state('tabs.guild-war', {
        url: "/guild-war",
        views: {
          'guild-war-tab': {
            templateUrl: "templates/guild-war.html"
          }
        }
      })
      .state('tabs.parametre', {
        url: "/parametre",
        views: {
          'parametre-tab': {
            templateUrl: "templates/parametre.html"
          }
        }
      })
      .state('tabs.information', {
        url: "/information",
        views: {
          'info-tab': {
            templateUrl: "templates/information.html"
          }
        }
      });


    $urlRouterProvider.otherwise("/tab/google-map");

  })


