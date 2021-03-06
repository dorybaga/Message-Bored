angular.module('app', ['ngRoute']);

angular.module('app')
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
      $routeProvider
      .when('/users', {
        templateUrl: './users/users.html',
        controller: 'usersController'
      })
      .when('/messages/latest', {
        templateUrl: './messages/messages.html',
        controller: 'messagesController'
      })
      .when('/login', {
        templateUrl: './login/login.html',
        controller: 'loginController'
      })
      .when('/topics', {
        templateUrl: './topics/topics.html',
        controller: 'topicsController'
      })
      .otherwise({
        template: '<h1>404 NOT FOUND :(</h1>'
      });

      $locationProvider.html5Mode(true);
    }
  ]);

