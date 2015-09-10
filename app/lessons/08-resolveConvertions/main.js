/**
 * Created by Administrator on 2015/9/9.
 */

var app = angular.module('app', ['ngRoute']);

//this is where providers are configured
//the services are not available at this point
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "app.html",
        controller: "AppCtrl",
        resolve: {
            /***
             * when using resolve with a controller like AppCtrl
             * it makes it easier to understand what it happening without
             * lots of in-line code particular for multiple function which must be run
             * when running multiple items they will be fired in 'parallel' and not in 'sequence
             */
            loadData: appCtrl.loadData,
            prepData: appCtrl.prepData
        }
    }).when('/pizza', {
        template: "Yum!!"
    }).otherwise({
        template: "this doesn't exit"
    });
});


//this is where the services are available
//they are generated from the providers
var appCtrl = app.controller('AppCtrl', function ($scope, $route) {
    /**
     * can access the values passed to resolve() in the route though most best to
     * access these through a service
     */
    console.log($route.current.locals)
    $scope.model = {
        message: "I\'m a great app!"
    };
});


appCtrl.loadData = function($q,$timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.resolve("loadData");
    },2000);
    return defer.promise;
};

appCtrl.prepData = function($q,$timeout){
    var defer = $q.defer();
    $timeout(function(){
        defer.resolve("prepData");
    },2000);
    return defer.promise;
}

