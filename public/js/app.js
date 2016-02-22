/*global angular*/

var app = angular.module('app', [
  'ngRoute',
  'controllers'
]);

app.config(['$routeProvider', function ($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl: 'partials/Home.html',
      controller: 'HomeController'
    })
    .when('/Projects', {
      templateUrl: 'partials/Projects.html',
      controller: 'ProjectsController'
    });
    
    //$locationProvider.html5Mode(true);
}]);

app.factory('Projects', ['$resource', function($resource){
  return $resource('/Projects/:id', null, {
    'update': { method:'PUT' }
  });
}]);
