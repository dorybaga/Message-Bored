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

      $scope.addTopic = function(){
        let newTopic = {
          name: $scope.tempTopic.name,
          created_by: localStorage.getItem('username')
        };

        TopicsService.addTopic(newTopic)
        .then((topic) => {
          $scope.topics = [...$scope.topics, topic.data]
        })
      }
    }]);