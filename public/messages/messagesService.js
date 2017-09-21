/*jshint esversion: 6 */
angular.module('app')
  .service('MessagesService', ['$http', function($http){
    return {
      getMessages: function() {
        return $http.get('/api/messages/latest')
        .then(function(messages) {
          console.log('messages************', messages);
          console.log('messages.data*******', messages.data);
          return messages.data;
        });
      }
    };
  }]);