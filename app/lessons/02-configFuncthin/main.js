/**
 * Created by Administrator on 2015/9/9.
 */

var app = angular.module('app',['ngRoute']);

//this is where providers are configured
//the services are not available at this point
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"app.html",
        controller:"AppCtrl"
    });
});



//this is where the services are available
//they are generated from the providers
app.controller('AppCtrl', function ($scope,$route) {
    $scope.model = {
        message:"This is my App!"
    };
});