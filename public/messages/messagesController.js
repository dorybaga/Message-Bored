/*jshint esversion: 6 */
angular.module('app')
  .controller('messagesController',
    ['$scope', 'MessagesService',
    function($scope, MessagesService){
      $scope.messages = [];
      MessagesService.getMessages()
      .then(function(messages) {
        $scope.messages = messages;
      })
      .catch((err) => {
        console.log(err);
      })

        $scope.postMsg = function(){
          let newPost = {
            body: $scope.msgBody,
            author_id: localStorage.getItem('username'),
            topic_id: TopicsService.getTopicById()
          };

        MessagesService.postMsg(newPost)
        .then((message) => {
          console.log("user#", newPost.author_id, "added a new message");
          $scope.messages = [...$scope.messages, message.data]
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }]);