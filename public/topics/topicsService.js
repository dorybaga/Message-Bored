/*jshint esversion: 6 */
angular.module('app')
  .service('TopicsService', ['$http', function($http){
    return {
      getTopics: function() {
        return $http.get('/api/topics')
        .then(function(topics) {
          console.log('topics*********', topics);
          console.log('topics.data****', topics.data);
          return topics.data;
        });
      }
    };
  }]);