/*jshint esversion: 6 */
angular.module('app')
  .controller('topicsController',
    ['$scope', 'TopicsService',
    function($scope, TopicsServce){
      $scope.topics = [];
      TopicsServce.getTopics()
      .then(function(topics) {
        $scope.topics = topics;
      })

      $scope.addTopic = function(){
        let newTopic = {
          name: $scope.tempTopic.name
        };

        TopicsService.addTopic(newTopic)
        .then((topic) => {
          $scope.topics = [...$scope.topics, topic.data]
        })
      }
    }]);