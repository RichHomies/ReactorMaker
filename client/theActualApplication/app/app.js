var ReactorMakerApp = angular.module('ReactorMakerApp', []);

ReactorMakerApp.controller('ReactorMakerAppCtrl', function ReactorMakerAppCtrl ($scope) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ReactorMakerApp' ;
    }
  });
  $scope.message = 'test'
})