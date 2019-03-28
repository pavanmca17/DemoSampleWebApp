var newapp = angular.module('newApp', ['ui.grid']);

newapp.controller('newController', function ($scope, $http) {
    $scope.arrEmps = new Array;

    webmethod();

    function webmethod() {

        var request = {
            method: 'GET',
            url: 'http://localhost:50282/api/Persons',
            dataType: 'json',
            headers:
            {
                'Content-Type': 'application/json'
            }
        };

        $http(request).then(function (response) {
           // alert(response[0].Name);
            console.log('Get Post', response);
            console.log('Get Post', response.data);
            var i = 0;
            angular.forEach(response.data,
                function () {
                    var emp =
                    {
                        Id: response[i].data.id,
                        Name: response[i].data.name,
                        Email: response[i].data.email
                    };
                    console.log('Get Post', emp);
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


        


    