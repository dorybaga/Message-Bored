/*jshint esversion: 6 */
angular.module('app')
  .controller('topicsController',
    ['$scope', 'TopicsService',
    function($scope, TopicsService){
      $scope.topics = [];
      TopicsService.getTopics()
      .then(function(topics) {
        $scope.topics = topics;
      })
      .catch((err) => {
        console.log(err);
      })

        $scope.addTopic = function(){
          let newTopic = {
            name: $scope.topicName,
            created_by: localStorage.getItem('username')
          };

        TopicsService.addTopic(newTopic)
        .then((topic) => {
          console.log("user#", newTopic.created_by, "added a new topic called", topic.data.name);
          $scope.topics = [...$scope.topics, topic.data]
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }]);