/*jshint esversion: 6 */

angular.module('app')
  .service('LoginService', ['$http', function($http){
    return {
      userAuth: function(data){
        return $http.get('/api/users/login/' + data)
        .then(user => {
          if(user !== null){
            localStorage.setItem('username', user.data.username)
          }
        })
      },
      addUser: function(newUser) { 
        return $http.post('/api/users', newUser); 
      }
    };
}]);
