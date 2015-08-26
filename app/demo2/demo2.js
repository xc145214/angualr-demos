'use strict';

angular.module('myApp.demo2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo2', {
    templateUrl: 'demo2/demo2.html',
    controller: 'Demo2Ctrl'
  });
}])

.controller('Demo2Ctrl', [function() {

}])

.controller('FirstCtrl',[function() {

    }])

.controller('SecondCtrl',[function() {

    }]);
