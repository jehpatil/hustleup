angular.module('myApp.controllers', [])
    .controller('myController', ['$scope','$window', 'networkService', function ($scope,$window, networkService) {
    console.log("myController loaded...");

    $scope.loginID = null;

    $scope.submitLoginID = function (data) {
        console.log(data);
        var dataPromiss = networkService.postLoginDataReq(data);
        dataPromiss.then(function (result) {
            console.log("result is " + result.message);
             if(result.status)
            {
                $window.location.href= result.redirect_url;
            }
        });
    }
    }])
    .controller('userController', ['$scope', '$window','networkService', function ($scope,$window, networkService) {
    console.log("userController loaded...");

    $scope.userData = null;
    $scope.isCreated = false;
    $scope.message = "";
    $scope.createUser = function (data) {
        console.log(data);

        var dataPromiss = networkService.postRegisterDataReq(data);
        dataPromiss.then(function (result) {
            console.log("result is " + result.message);
            $scope.isCreated = true;
            $scope.message = result.message;
            $scope.userData = null;
            if(result.status)
            {
                $window.location.href='/html_templates/index.html#/login';
            }
        });
    }
}]);