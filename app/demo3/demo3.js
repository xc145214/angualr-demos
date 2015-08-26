'use strict';

angular.module('myApp.demo3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo3', {
            templateUrl: 'demo3/demo3.html',
            controller: 'Demo3Ctrl'
        });
    }])
    /**
     * define a factory for data resource
     */
    .factory('Data', function () {
        return {
            message: "I'm data from a service"
        }
    })
    /**
     * define a filter
     */
    .filter('reverse', function (Data) {
        return function (text) {
            return text.split("").reverse().join("")+ Data.message;
        }
    })

    .filter('reverseStr',function(){
        return function(text){
            return text.split("").reverse().join("")+"foo";
        }
    })

    .controller('Demo3Ctrl', [function () {

    }])

    .controller('FirstCtrl', ['$scope', 'Data', function ($scope, Data) {
        $scope.data = Data;
    }])

    .controller('SecondCtrl', ['$scope', 'Data', function ($scope, Data) {
        $scope.data = Data;

        /**
         * define a method
         * @returns {string} reverse String
         */
        $scope.reverseMessage = function (message) {
            return message.split('').reverse().join('');
        };
    }]);