angular.module("app").directive("video", ['$sce', function ($sce) {
    "use strict";

    return {
        link: function ($scope) {
            $scope.videos = [{
                title: "AngularJS2 Simple Hello World Application",
                src : $sce.trustAsResourceUrl('http://www.youtube.com/embed/videoseries?list=PLivabR-0CtuO7NwNWStyU8PSSPp0939CV'),
                description: 'A Simple Hello World application built using Angular JS 2.0',
                sourceCode: 'https://github.com/kensplanet/angularjs2-hello-world'
            },
                {
                    title: "AngularJS Shopping Cart",
                    src : $sce.trustAsResourceUrl('http://www.youtube.com/embed/videoseries?list=PLivabR-0CtuPs6CKObTk4S3YNbBdd2vpE'),
                    description: 'A Cool Shopping Cart using Angular JS, Spring MVC, and MongoDB.'
                },
                {
                    title: "Canada Permanent Residency Visa",
                    src : $sce.trustAsResourceUrl('http://www.youtube.com/embed/videoseries?list=PLivabR-0CtuNxg8xmeDvL2SFfl-5EMpiQ'),

                },
                {
                    title: "Canadian National Exhibition 2015",
                    src : $sce.trustAsResourceUrl('http://www.youtube.com/embed/videoseries?list=PLivabR-0CtuMxJTwpQmLEcymma-GC7rBi'),

                }]
        },
        templateUrl: "templates/videos.html"
    };
}
]);
