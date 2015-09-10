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
    }).when('/pizza',{
        template:"Yum!!"
    }).otherwise({
        template:"this doesn't exit"
    });
});



//this is where the services are available
//they are generated from the providers
app.controller('AppCtrl', function ($scope,$q) {

    var defer = $q.defer();

    defer.promise
        .then(function (weapon) {
            alert('You can have my '+ weapon);
            return 'bow';
        })
        .then(function (weapon) {
            alert('And My '+ weapon);
            return 'axe';
        })
        .then(function (weapon) {
            alert('and My '+ weapon)
        });

    defer.resolve('sword');


    $scope.model = {
        message:"This is my App!"
    };
});