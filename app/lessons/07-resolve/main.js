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
        resolver: {
            app: function ($q, $timeout) {
                var defer = $q.defer();
                $timeout(function () {
                    defer.resolve()
                }, 2000);
                return defer.promise
            }
        }
    }).when('/pizza', {
        template: "Yum!!"
    }).when('/location', {
        templateUrl: "location.html",
        controller: "LocationCtrl"
    }).otherwise({
        template: "this doesn't exit"
    });
});

app.factory('LocationInfo', function ($http, $q) {
    return {
        query: function () {
            var defer = $q.defer();// 声明延后执行，表示要去监控后面的执行
            $http({method: 'GET', url: 'output.json'})
                .success(function (data, status, headers, config) {
                    defer.resolve(data); // 声明执行成功，即http请求数据成功，可以返回数据了
                }).
                error(function (data, status, headers, config) {
                    defer.reject(data);// 声明执行失败，即服务器返回错误
                });
            return defer.promise;//返回承诺，这里并不是最终数据，而是访问最终数据的API

        }
    }
});


//this is where the services are available
//they are generated from the providers
app.controller('AppCtrl', function ($scope, $route) {
    $scope.model = {
        message: "This is my App!"
    };
});

app.controller('LocationCtrl', function (LocationInfo,$scope) {
    var promise = LocationInfo.query(); // 同步调用，获得承诺接口
    promise.then(function(data) {  // 调用承诺API获取数据 .resolve
        $scope.locations = data;
    }, function(data) {  // 处理错误 .reject
        $scope.locations = {error: '查询失败！'};
    });
});