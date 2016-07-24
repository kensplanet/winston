angular.module('app').controller('skillSetController', ['$scope', function($scope, $analytics) {

    var topSkillSet = [
        "angularjs", "angular2", "react", "nodejs", "jquery", "bootstrap", "html5-css3", "javascript", "ajax", "webpack", "grunt", "gulp", "bower"
    ];

    var otherSkillSet = ["javaee", "java", "jsp", "servlets", "spring", "hibernate",
        "mongodb", "solr", "unix", "git", "jenkins", "jira", "json", "thymeleaf", "maven",
        "agile", "confluence", "tomcat", "eclipse", "sts", "sass", "less"];

    $scope.topSkillsList = [];
    $scope.otherSkillsList = [];

    var topSkillGroups = [];
    var otherSkillGroups = [];

    for (var i = 0; i < topSkillSet.length; i++) {
        topSkillGroups.push(topSkillSet[i]);
        if ((i + 1) % 3 == 0 || i == topSkillSet.length - 1) {
            $scope.topSkillsList.push(topSkillGroups);
            topSkillGroups = [];
        }
    }

    for (var i = 0; i < otherSkillSet.length; i++) {
        otherSkillGroups.push(otherSkillSet[i]);
        if ((i + 1) % 3 == 0 || i == otherSkillSet.length - 1) {
            $scope.otherSkillsList.push(otherSkillGroups);
            otherSkillGroups = [];
        }
    }
}]);
