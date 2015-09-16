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
    }).when('/new',{
        templateUrl:"new.html",
        controller:"NewCtrl",
        resolve:{
            loadData:viewCtrl.LoadData
        }
    }).when('/pizza',{
        template:"Yum!!"
    }).otherwise({
        template:"this doesn't exit"
    });
});



app.controller("AppCtrl", function ($scope, $rootScope, $route, $location) {
    $rootScope.$on("$routeChangeStart", function (event, current, previous, rejection) {
        // Step 2, route change starts, no promises have been resolved yet
        console.log($scope, $rootScope, $route, $location);
    });
    $rootScope.$on("$routeChangeSuccess", function (event, current, previous, rejection) {
        // Step 3, route is successfully changed, UI has not been updated yet
        console.log($scope, $rootScope, $route, $location);
    });
});

var viewCtrl = app.controller("ViewCtrl", function ($scope, $rootScope, $route, $location) {
    $scope.changeRoute = function () {
        // Step 1, occurs before the route change begins
        console.log($scope);
        $location.path("/new");
    };
});



app.controller("NewCtrl", function ($scope, loadData, $template) {
    // Step 4, the new controller has been instantiated
    console.log($scope, loadData, $template);
});

viewCtrl.loadData = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve({message: "success"});
    }, 2000);
    return defer.promise;
};