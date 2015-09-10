'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.demo1',
    'myApp.demo2',
    'myApp.demo3',
    'myApp.demo4',
    'myApp.demo5',
    'myApp.demo6',
    'myApp.demo7',
    'myApp.demo8',
    'myApp.demo9',
    'myApp.demo10',
    'myApp.demo11',
    'myApp.demo12',
    'myApp.demo13'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
