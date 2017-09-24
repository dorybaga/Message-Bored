/*jshint esversion: 6 */
angular.module('app')
  .service('TopicsService', ['$http', function($http){
    return {
      getTopics: function() {
        return $http.get('/api/topics')
        .then(function(topics) {
          return topics.data;
        })
        .catch((err) => {
          console.log(err);
        })
      },
      addTopic: function(topic) { 
        return $http.post('/api/topics', topic); 
      },
      setTopicId: function(topicId)  {
        console.log('SET TOPIC ID')
      }
      // getTopicById: function(topicId) {
      //   console.log('GETTING TOPIC BY ID')
      //   return $http.get('/api/topics/:id')
      //   .then(function(topic) {
      //     return topic.data
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      // }
    };
  }]);