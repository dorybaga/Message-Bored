/*jshint esversion: 6 */
angular.module('app')
.controller('topicController',
  ['$scope', 'TopicService', '$routeParams',
  function($scope, TopicService, $routeParams){
      $scope.messages = [];   
      TopicService.getTopicById($routeParams.id)
      .then(function(topic) {
        $scope.topic = topic;
      })
      .catch((err) => {
        console.log(err);
      })

      $scope.postMsg = function(){
        let newPost = {
          body: $scope.msgBody,
          author_id: localStorage.getItem('username')
        };

      TopicService.postMsg(newPost)
      .then((message) => {
        console.log("user#", newPost.author_id, "added a new message");
        $scope.messages = [...$scope.messages, message.data]
        console.log(message.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }]);