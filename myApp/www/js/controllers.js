angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, $timeout) {
  $scope.co_level = 0;
  $scope.co_class = 'safe';

  $scope.alertMessageDisplayed = false;
  $scope.alertMsg = function() {
    $scope.alertMessageDisplayed = true;
    var alertPopup = $ionicPopup.alert({
      title: 'Game Over',
      template: 'Danger!'
    });
    alertPopup.then(function(res) {
      console.log(res);
    });
  };

  // Use the M2X library to get data
  $scope.handler = function() {
    if (!alertMessageDisplayed) {
      var m2x = new M2X("b508161c43e6b6dae291d655145999a4");
      m2x.feeds.streamValues(
        "314b8fd2a5639cd6ed9597b6eb37ad78",
        "ledon",
        {},
        function(a) {
          console.log(a);
          $scope.co_level = parseInt(a['values'][0]['value']);
        });
        if (co_level > 35 && !alertMessageDisplayed) {
          $scope.co_class = 'danger';
          $scope.alertMsg();
        }
    }
    $timeout($scope.handler, 3000);
  }

  $timeout($scope.handler, 3000);
})

.controller('AccountCtrl', function($scope) {
});
