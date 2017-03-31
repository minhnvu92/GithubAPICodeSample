var MyApp = angular.module('MyApp', []);

MyApp.controller("gitController", function($scope, $http) {
    $scope.getRepos = function() {
        //set url for HTTP request
        var Url = "https://api.github.com/users/" + $scope.username + "/repos";

        $http(
            {
            method: 'GET',
            url: Url
            }
         )
        .then(function (response) {
            $scope.repos = response.data;
        }).catch(function (response) {
            alert("Error: Username not found. Please use valid username")
        });
    }

});