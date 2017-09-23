/*jshint esversion: 6 */
angular.module('app')
  .service('TopicsService', ['$http', function($http){
    return {
      getTopics: function() {
        return $http.get('/api/topics')
        .then(function(topics) {
          return topics.data;
        });
      },
      addTopic: function(topic) { 
        return $http.post('/api/topics', topic); 
      }
    };
  }]);