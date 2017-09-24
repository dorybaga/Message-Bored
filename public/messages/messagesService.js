/*jshint esversion: 6 */
angular.module('app')
  .service('MessagesService', ['$http', function($http){
    return {
      getMessages: function() {
        return $http.get('/api/messages/latest')
        .then(function(messages) {
          return messages.data;
        })
        .catch((err) => {
          console.log(err);
        })
      }
      // postMsg: function(msg) {
      //   return $http.post('/api/messages', msg);
      // }
    };
  }]);