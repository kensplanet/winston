angular.module("app").directive("header", ['$http', function ($http) {
        "use strict";

        return {
            link: function ($scope) {
                $http.get('https://api.stackexchange.com/2.2/users/5232935?site=stackoverflow&key=LUtq9xxjnksDU1D4ZDAjsg((').then(function(response) {
                    $scope.stackoverflow = response.data;
                }, function error() {
                    $http.get('resources/stackoverflow.json').then(function(response) {
                        $scope.stackoverflow = response.data;
                    });
                });

                $http.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCKxN1Y0jssY7Iv8nzMR7FxQ&key=AIzaSyBxOvqHwexFvajH0if2ZetjABr8aYeD5mY').then(function(response) {
                    $scope.youtube = response.data;
                }, function error() {
                    $http.get('resources/youtube.json').then(function(response) {
                        $scope.youtube = response.data;
                    });
                });

                $http.get('https://api.github.com/users/kensplanet/followers').then(function(response) {
                    $scope.github = response.data;
                }, function error() {
                    $http.get('resources/github.json').then(function(response) {
                        $scope.github = response.data;
                    });
                });
            },
            restrict: 'A',
            templateUrl: "templates/header.html"
        };
    }
]);
