var app = angular.module('myapp', []);

app.controller("hellocontroller", function ($scope,$http) {
    $scope.Name = 'Parimala';
    $scope.content = 'MyContent';

    $scope.callwebapi = function () {
        var request = {
            method: 'GET',
            url: 'http://localhost:50282/api/Persons',
            headers:
            {
                'Content-Type': 'application/json'
            }
        };
        $http(request).then(function (response) {
            // alert(response);
            $scope.data = JSON.parse(response)
            alert($scope.data);
        },
            function (error) {
                console.log(error);
            });
    }; 


    $scope.contentchanged = function () {
        alert('Content has changed to' + $scope.content);
    }
});

