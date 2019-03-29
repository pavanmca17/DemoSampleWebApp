var app = angular.module('myapp', []);

app.controller("hellocontroller", function ($scope,$http) {
    $scope.Name = 'Test Name';
    $scope.content = 'Test Content';

    $scope.callwebapi = function () {
        var request =
        {   method: 'GET',
            url: 'http://localhost:50282/api/Persons',
            headers:
            {
                'Content-Type': 'application/json',
                'api-version': '2.0'
            }
        };

        $http(request).then(function (response)
        {
            $scope.data = JSON.parse(response);            
        },function (error)
          {
            console.log(error);

          });
    };
    
});

