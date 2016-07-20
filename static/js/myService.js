angular.module('myApp.service',[])
.factory('networkService', [ '$http', function($http){

    var postLoginDataReq = function(data){
        console.log('userInfo'+ data);
        return $http.post('http://192.168.3.7:8000/api/login/', data).then(function(result){
           
            return result.data;
        })
    };
       var postRegisterDataReq = function(data){
        console.log('userInfo'+ data);
        return $http.post('http://192.168.3.7:8000/api/createUser/', data).then(function(result){
        return result.data;
        })
    };
    return{
        postLoginDataReq: postLoginDataReq,
        postRegisterDataReq:postRegisterDataReq
    }
}]);