/*jshint esversion: 6 */

angular.module('app')
  .controller('loginController',
    ['$scope', 'LoginService',
    function($scope, LoginService){
      $scope.user = { 'name': ''};
      $scope.LoginService = LoginService;

      $scope.userAuth = function(){
        let username = $scope.user.name;
        LoginService.userAuth(username);
        console.log($scope.user.name, "is logged in")
        $scope.isLoggedIn = true;
        $scope.user.name = '';
      }

      $scope.addUser = function(){
        let newUser = {
          name: $scope.tempUser.name
        };

        LoginService.addUser(newUser)
        .then((newUser) => {
          $scope.users = [...$scope.users, newUser.data]
        })
      }
}]);
