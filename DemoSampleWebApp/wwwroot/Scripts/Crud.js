var newapp = angular.module('newApp', ['ui.grid']);

newapp.controller('newController', function ($scope, $http) {
    $scope.arrEmps = new Array;

    getData();

    function getData()
    {
        var request = {
            method: 'GET',
            url: 'https://demoapi-2-dev-as.azurewebsites.net/API/Persons',
            dataType: 'json',
            headers:
            {
                'Content-Type': 'application/json',
                'api-version': '1.0'
            }
        };

        $http(request).then(function (response) {
            console.log('Get Response', response);
            console.log('Get Response Data', response.data);
            var i = 0;
            angular.forEach(response.data,
                function () {
                    var emp =
                    {
                        Id: response[i].data.id,
                        Name: response[i].data.name,
                        Email: response[i].data.email
                    };
                    console.log('emp', emp);
                    $scope.arrEmps.push(emp);
                    i += 1;
                },
                function (error) {
                    alert('Error');
                });

            alert($scope.arrEmps);
            $scope.gridData = { data: 'arrEmps' };

        });

    }
});


        


    