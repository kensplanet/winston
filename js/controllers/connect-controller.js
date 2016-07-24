angular.module('app').controller('connectController', ['$scope', function ($scope, $analytics) {

    var professionalConnect = [{
        brand: "linkedin",
        url: "https://www.linkedin.com/in/kensplanet"
    }, {
        brand: "github",
        url: "https://github.com/kensplanet"
    }, {
        brand: "stackoverflow",
        url: "http://stackoverflow.com/users/5232935/kensplanet"
    }, {
        brand: "youtube",
        url: "https://www.youtube.com/channel/UCKxN1Y0jssY7Iv8nzMR7FxQ"
    }, {
        brand: "yahoo-mail",
        url: "mailto:kensplanet@yahoo.com"
    }];

    var socialConnect = [{
        brand: "instagram",
        url: "https://www.instagram.com/kensplanet/"
    }, {
        brand: "twitter",
        url: "https://twitter.com/kensplanet"
    }, {
        brand: "quora",
        url: "https://www.quora.com/profile/Kenneth-John"
    }, {
        brand: "facebook",
        url: "https://www.facebook.com/kensplanet"
    }, {
        brand: "pinterest",
        url: "https://pinterest.com/kenneth3122/"
    }, {
        brand: "gmail-logo",
        url: "mailto:cyberkenneth@gmail.com"
    }, {
        brand: "google-plus",
        url: "https://plus.google.com/104188514977573539204"
    },];

    $scope.professionalConnectList = [];
    $scope.socialConnectList = [];

    var professionalConnectGroups = [];
    var socialConnectGroups = [];

    for (var i = 0; i < professionalConnect.length; i++) {
        professionalConnectGroups.push(professionalConnect[i]);
        if ((i + 1) % 3 == 0 || i == professionalConnect.length - 1) {
            $scope.professionalConnectList.push(professionalConnectGroups);
            professionalConnectGroups = [];
        }
    }

    for (var i = 0; i < socialConnect.length; i++) {
        socialConnectGroups.push(socialConnect[i]);
        if ((i + 1) % 3 == 0 || i == socialConnect.length - 1) {
            $scope.socialConnectList.push(socialConnectGroups);
            socialConnectGroups = [];
        }
    }
}]);
