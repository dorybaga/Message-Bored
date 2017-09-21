/*jshint esversion: 6 */
angular.module('app')
  .service('UsersService', ['$http', function($http){
    return {
      getUsers: function() {
        return $http.get('/api/users')
        .then(function(users) {
          console.log('users***********', users);
          console.log('users.data******', users.data)
          return users.data;
        });
      }
      // getUser: function(index) { return users[index]; },
      // addUser: function(user) { users.push(user); }
    };
}]);