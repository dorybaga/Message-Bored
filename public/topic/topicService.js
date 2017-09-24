/*jshint esversion: 6 */
angular.module('app')
.service('TopicService', ['$http', function($http){
  return {
    getTopicById: function(topicName) {
      console.log('topicService is getting topic id', topicName)
      return $http.get('/api/topics/' + topicName)
      .then(function(topic) {
        console.log(topic)
        console.log(topic.data)
        return topic.data
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };
}]);