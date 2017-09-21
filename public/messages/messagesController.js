/*jshint esversion: 6 */
angular.module('app')
  .controller('messagesController',
    ['$scope', 'MessagesService',
    function($scope, messagesService){
      $scope.messages = [];
      messagesService.getMessages()
      .then(function(messages) {
        $scope.messages = messages;
      });
    }]);