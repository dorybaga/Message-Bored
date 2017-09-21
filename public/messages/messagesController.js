/*jshint esversion: 6 */
angular.module('app')
  .controller('messagesController',
    ['$scope', 'MessagesService',
    function($scope, MessagesService){
      $scope.messages = [];
      MessagesService.getMessages()
      .then(function(messages) {
        $scope.messages = messages;
      });
    }]);