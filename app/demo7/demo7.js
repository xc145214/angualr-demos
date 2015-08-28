/**
 * Created by Administrator on 2015/8/27.
 */
angular.module("myApp.demo7", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo7', {
            templateUrl: 'demo7/demo7.html',
            controller: 'Demo7Ctrl'
        });
    }])

    .directive("panel",function(){
        return{
            restrict:"E",
            transclude:true,
            template:'<div class="panel" ng-transclude>This is a panel component!</div>'
        }
    })
    .controller("AppCtrl", ["$scope", function ($scope) {
        $scope.AppCtrl = this;
        this.sayHi = function(){
            alert("Hi");
        }
    }])


    .controller('Demo7Ctrl', [function () {

    }]);