/*global angular*/

var controllers = angular.module('controllers', []);

controllers.controller('HomeController', ['$scope', function ($scope) {

        
}]);

controllers.controller('ProjectsController', ['$scope', '$http', function ($scope, $http) {
        $http.get('/api/projects/')
        .success(function(data) {
            $scope.projects = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
        
        $scope.createProject = function() {
                console.log($scope.formData);
                if(typeof $scope.formData !== 'undefined' && $scope.formData.name != ''){
                    $http.post('/api/projects/', JSON.stringify($scope.formData))
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.projects = data;
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
                        
                }
        };
        
        $scope.deleteProject = function(id) {
        $http.delete('/api/projects/' + id)
            .success(function(data) {
                    console.log(data)
                $scope.projects = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        };

}]);