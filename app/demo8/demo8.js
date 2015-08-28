/**
 * Created by Administrator on 2015/8/28.
 */


angular.module("myApp.demo8", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo8', {
            templateUrl: 'demo8/demo8.html',
            controller: 'Demo8Ctrl'
        });
    }])


    .controller("AppCtrl", AppCtrl)
    .directive(panel)

    .controller('Demo8Ctrl', [function () {

    }]);

/**
 * define a controller:alert msg
 * @param $scope
 * @returns {AppCtrl}
 * @constructor
 */
function AppCtrl($scope) {
    this.sayHi = function () {
        alert('hi');
    };

    return $scope.AppCtrl = this;
}
AppCtrl.$inject = ['$scope'];

/**
 * define a direvtive: with panel
 * @returns {{restrict: string}}
 */
function panel() {
    return {
        restrict: "E"
    };
}

