/**
 * Created by Administrator on 2015/9/9.
 */

var app = angular.module('app', ['ngRoute']);

//this is where providers are configured
//the services are not available at this point
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "app.html",
        controller: "AppCtrl"
    }).when('/pizza/:crust/:toppings', {
            redirectTo:function(routeParams, path, search){
                console.log(routeParams);
                console.log(path);
                console.log(search);
                return "/" + routeParams.crust
            }
    }).when('/deep', {
        template: "Deep dish"
    }).otherwise({
        template: "this doesn't exit"
    });
});


//this is where the services are available
//they are generated from the providers
app.controller('AppCtrl', function ($scope, $route) {
    $scope.model = {
        message: "This is my App!"
    };
});