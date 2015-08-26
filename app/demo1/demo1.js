'use strict';

angular.module('myApp.demo1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo1', {
    templateUrl: 'demo1/demo1.html',
    controller: 'Demo1Ctrl'
  });
}])

.controller('Demo1Ctrl', [function() {

}])

.controller('FirstCtrl',[function() {

    }])

.controller('SecondCtrl',[function() {

    }]);
