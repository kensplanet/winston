angular.module('app')
    .config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {
        $routeProvider

        // route for the home page
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })
            .when('/skillSet', {
                templateUrl: 'templates/skillSet.html',
                controller: 'skillSetController'
            })
            .when('/connect', {
                templateUrl: 'templates/connect.html',
                controller: 'connectController'
            })
            .when('/angularjs-shopping-cart', {
                templateUrl: 'templates/angularjs-shopping-cart.html',
                controller: 'angularjsShoppingCartController'
            }).otherwise({
            redirectTo: '/'
        });

        $translateProvider.preferredLanguage('en-CA');

        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/',
            suffix: '.json'
        });
    }]);