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

app.directive("error", function($rootScope) {
    return {
        restrict: "E",
        template: '<div class="alert-box alert" ng-show="isError">Error!</div>',
        link: function(scope) {
            $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
                scope.isError = true;
            });
        }
    }
});

//this is where the services are available
//they are generated from the providers
app.controller('AppCtrl', function ($rootScope) {
    $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        console.log(event);
    });
});

var viewCtrl = app.controller("ViewCtrl", function ($scope, $q) {
    console.log($route);
    $scope.model = {
        message: 'This is my app'
    };
});

viewCtrl.loadData = function ($q,$timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.reject("Your network is down");
    }, 500);
    return defer.promise;
};


