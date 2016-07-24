angular.module("app").directive("body", [function () {
        "use strict";

        return {
            link: function ($scope) {},
            restrict: 'A',
            templateUrl: "templates/body.html"
        };
    }
]);
