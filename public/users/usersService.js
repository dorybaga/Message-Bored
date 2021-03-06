/*jshint esversion: 6 */
angular.module('app')
  .service('UsersService', ['$http', function($http){
    return {
      getUsers: function() {
        return $http.get('/api/users')
        .then(function(users) {
          return users.data;
        });
      }
    };
}]);