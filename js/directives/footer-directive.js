angular.module("app").directive("footer", ['$http', function ($http) {
        "use strict";

        return {
            link: function ($scope) {
                $scope.year = new Date().getFullYear();
                $http.get('resources/metadata.json').then(function(response) {
                    $scope.metadata = response.data;
                });
            },
            restrict: 'A',
            templateUrl: "templates/footer.html"
        };
    }
]);
