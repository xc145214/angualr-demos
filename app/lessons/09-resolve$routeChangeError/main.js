/**
 * Created by Administrator on 2015/9/9.
 */

var app = angular.module('app',['ngRoute']);


//this is where providers are configured
//the services are not available at this point
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"app.html",
        controller:"ViewCtrl",
        resolve:{
            loadData:viewCtrl.loadData
        }
    }).when('/pizza',{
        template:"Yum!!"
    }).otherwise({
        template:"this doesn't exit"
    })
    ;
});



//this is where the services are available
//they are generated from the providers
app.controller('AppCtrl', function ($rootScope) {
    $rootScope.$on("$rootChangeError",function(event, current, previous, rejection){
        console.log(event);
        console.log(current);
        console.log(previous);
        console.log(rejection);
    })
});

var viewCtrl = app.controller("ViewCtrl", function ($scope, $route) {
    console.log($route);
    $scope.model = {
        message: 'This is my app'
    };
});

viewCtrl.loadData = function ($q,$timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.reject("Your network is down");
    }, 2000);
    return defer.promise;
};


