/*jshint esversion: 6 */

angular.module('app')
  .service('LoginService', ['$http', function($http){
    return {
      userAuth: function(data){
        console.log('dataaaaaaaaaaaaa', data)
        return $http.get('/api/users/login' + data)
        .then(user => {
          console.log('USER', user)
          console.log('USER.NAME', user.name)
          console.log(user.id)
          if(user !== null){
            localStorage.setItem('username', user.data.username)
          }
        })
      },
      addUser: function(user) { 
        return $http.post('/api/users', user); 
      }
    };
}]);
