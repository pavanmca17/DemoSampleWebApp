var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
    $scope.movies = ['Passion of christ','Bible'];
});

myApp.directive('myDirective', function () {
    return {
        restrict: 'E',
        template: '<h1> I made a directive!</h1 >'
    };
});

myApp.directive('myMovie', function () {
    return {
        restrict: 'E',
        transclude: 'true',
        template: '<span ng-transclude></span>',
        link: function (scope, element, attr) {
            element.append("<strong>" + attr.title +"</strong>");
        }
    };
});
