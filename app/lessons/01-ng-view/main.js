/**
 * Created by Administrator on 2015/9/9.
 */

var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"app.html",
        controller:"AppCtrl"
    });
});

app.controller('AppCtrl', function ($scope) {
    $scope.model = {
        message:"This is my App!"
    };
});