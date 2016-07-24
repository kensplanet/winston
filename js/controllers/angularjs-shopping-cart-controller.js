angular.module('app').controller('angularjsShoppingCartController', ['$scope', '$sce', function($scope, $sce) {
    $scope.video = $sce.trustAsResourceUrl("https://www.youtube.com/embed/Cme4gHdjgc8?list=PLivabR-0CtuPs6CKObTk4S3YNbBdd2vpE");
}]);
