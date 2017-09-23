/*jshint esversion: 6 */

angular.module('app')
  .service('LoginService', ['$http', function($http){
    return {
      userAuth: function(data){
        return $http.get('/api/users/login/' + data)
        .then(user => {
          console.log('this is the user', user)
          console.log('username id:', user.data.username)
          if(user !== null){
            localStorage.setItem('username', user.data.username)
          }
        })
        .catch((err) => {
          console.log(err);
        })
      },
      addUser: function(newUser) { 
        return $http.post('/api/users', newUser); 
      }
    };
}]);
