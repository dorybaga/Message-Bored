/*jshint esversion: 6 */
angular.module('app')
.controller('usersController',
  ['$scope', 'UsersService',
    function($scope, UsersService){
      $scope.users = [];
      UsersService.getUsers()
      .then(function(users) {
        $scope.users = users;
      });
}]);