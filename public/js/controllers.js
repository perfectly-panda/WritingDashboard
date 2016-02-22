/*global angular*/

var controllers = angular.module('controllers', []);

controllers.controller('HomeController', ['$scope', function ($scope) {

        
}]);

controllers.controller('ProjectsController', ['$scope', '$http', function ($scope, $http) {
        $http.get('/api/projects')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

}]);