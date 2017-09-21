/*jshint esversion: 6 */
angular.module('app')
  .controller('topicsController',
    ['$scope', 'TopicsService',
    function($scope, TopicsServce){
      $scope.topics = [];
      TopicsServce.getTopics()
      .then(function(topics) {
        $scope.topics = topics;
      });
    }]);