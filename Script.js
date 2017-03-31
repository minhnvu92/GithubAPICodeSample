var MyApp = angular.module('MyApp', []);

MyApp.controller("gitController", function($scope, $http) {
    $scope.getRepos = function() {
        if ($.trim($scope.username) != '') {
            //set url for HTTP request
            var Url = "https://api.github.com/users/" + $scope.username + "/repos";
            //use $http to pull data from the Github API using GET method
            $http({
                    method: 'GET',
                    url: Url
                })
                .then(function(response) {
                    $scope.repos = response.data;
                }).catch(function(response) {
                    alert("Error:Username (" + $scope.username + ") not found. Please use valid username");

                });

        }
    };
});