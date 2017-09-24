/*jshint esversion: 6 */
angular.module('app')
.service('TopicService', ['$http', function($http){
  return {
    getTopicById: function(topicName) {
      return $http.get('/api/topics/' + topicName)
      .then(function(topic) {
        return topic.data
      })
      .catch((err) => {
        console.log(err);
      })
    },
    postMsg: function(msg) {
      return $http.post('/api/messages', msg);
    }
  };
}]);