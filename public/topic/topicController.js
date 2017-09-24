/*jshint esversion: 6 */
angular.module('app')
.controller('topicController',
  ['$scope', 'TopicService', '$routeParams',
  function($scope, TopicService, $routeParams){    
      TopicService.getTopicById($routeParams.id)
      .then(function(topic) {
        $scope.topic = topic;
        console.log('topicController should get the correct topic', topic)
        // $scope.topic = {
        //   id: topic.data.id,
        //   name: topic.data.name
        // }
      })
      .catch((err) => {
        console.log(err);
      })
  }]);