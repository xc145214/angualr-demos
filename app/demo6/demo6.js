/**
 * Created by Administrator on 2015/8/26.
 */
angular.module("myApp.demo6", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo6', {
            templateUrl: 'demo6/demo6.html',
            controller: 'Demo6Ctrl'
        });
    }])

    .directive("phone1", function () {
        return {
            restrict:"E",
            scope:{
                number:"@",
                network:"=",
                makeCall:"&"
            },
            template:'<div class="panel">Number {{number}} Network: <select ng-model="network" ng-options="net for net in networks"></select></div>' +
            '<input type="text" ng-model="value">' +
            '<div class="button" ng-click="makeCall({number: number, message: value})">Call</div>',
            link: function (scope) {
                scope.networks = ['Verizon', 'AT&T', 'T-Mobile', 'Sprint'];
                scope.network = scope.networks[0];
            }
        }
    })

    .controller("AppCtrl", ["$scope", function ($scope) {

        $scope.leaveVoiceMail = function (number,message) {
            alert("Number : "+ number+ "said: "+ message)
        }
    }])



    .controller('Demo6Ctrl', [function () {

    }]);