angular.module('kensplanetApp').controller('portfolioController', [ '$rootScope', '$document', '$timeout', '$scope', function($rootScope, $document, $timeout, $scope) {
    
    $scope.events = [{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'Current Status',
        when: 'July 2015 - present',
        content: '<img width="100px" src="images/Flag_of_Canada.svg"/><br/><br/> I am a Permanent Resident of Canada".<br/>I am actively seeking Full Stack or Front End Developer roles in Toronto, Canada.'
    }, {
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'Accenture / Carphone Warehouse',
        when: 'May 2013 - July 2015',
        content: '<img src="images/accenture-cpw.png" class="img-responsive"/><br/>'
    }];
  
    // optional: not mandatory (uses angular-scroll-animate)
    $scope.animateElementIn = function($el) {
        $el.removeClass('hidden');
        $el.addClass('bounce-in');
    };

    // optional: not mandatory (uses angular-scroll-animate)
    $scope.animateElementOut = function($el) {
        $el.addClass('hidden');
        $el.removeClass('bounce-in');
    };
} ]);