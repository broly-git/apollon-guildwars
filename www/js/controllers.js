angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,apiGW2) {

  apiGW2.get();

      // apiGW2.get().then(function () {
      //
      //
      //
      //   for (var propName in basicPlayerInfo) {
      //     if (basicPlayerInfo.hasOwnProperty(propName)) {
      //       var player = basicPlayerInfo[propName];
      //       if(player){$scope.showPlayer = true}else{$scope.showPlayer = false}
      //       $scope.player = player;
      //       console.log(player);
      //     }
      //   }
      //
      // });




})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
