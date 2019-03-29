var newapp = angular.module('newApp', ['ui.grid']);

newapp.controller('newController', function ($scope, $http) {
    $scope.myData = [];

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
            console.log('Get Response', response.data); 
            //var jsondataobj = JSON.parse(response);
            //console.log('JSON', jsondataobj);  
            //var rowcount = jsondataobj.length;
            //console.log('Count', rowcount);  

            response.data.forEach(function (row) {
                $scope.myData.push(row);
            });                  
            
            $scope.gridData.data = [];    
            $scope.gridData.data = $scope.myData;

        });

    }
});


        


    