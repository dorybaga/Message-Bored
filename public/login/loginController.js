/*jshint esversion: 6 */

angular.module('app')
  .controller('loginController',
    ['$scope', 'LoginService',
    function($scope, LoginService){
      $scope.newUser = { 'name': ''};
      $scope.LoginService = LoginService;

      $scope.userAuth = function(){
        let username = $scope.newUser.name;
        LoginService.userAuth(username);
        console.log('newusername', $scope.newUser.name)
        $scope.isLoggedIn = true;
        $scope.newUser.name = '';
      }

      $scope.addUser = function(){
        let newUser = {
          name: $scope.tempUser.name
        };

        LoginService.addUser(newUser)
        .then((user) => {
          $scope.users = [...$scope.users, user.data]
        })
      }
}]);
