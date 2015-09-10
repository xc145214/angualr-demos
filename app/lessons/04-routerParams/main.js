/**
 * Created by Administrator on 2015/9/9.
 */

var app = angular.module('app',['ngRoute']);

//this is where providers are configured
//the services are not available at this point
app.config(function($routeProvider){
    $routeProvider.when('/map/:country/:state/:city',{
        templateUrl:"app.html",
        controller:"AppCtrl"
    }).otherwise({
        template:"this doesn't exit"
    });
});



//this is where the services are available
//they are generated from the providers
app.controller('AppCtrl', function ($scope,$routeParams) {
    $scope.model = {
        message:'Address:' + $routeParams.city + ' ' +
        $routeParams.state + ' ' + $routeParams.country
    };
});