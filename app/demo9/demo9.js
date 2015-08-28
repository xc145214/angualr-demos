/**
 * Created by Administrator on 2015/9/29.
 */


angular.module("myApp.demo9", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo9', {
            templateUrl: 'demo9/demo9.html',
            controller: 'Demo9Ctrl'
        });
    }])

    .directive('zippy', function () {
        return{
            restrict:"E",
            transclude:true,
            scope:{
                title:'@'
            },
            template:'<div>\n\t<h3 ng-click="toggleContent()">{{title}}</h3>\n\t<div ng-show="isContentVisible" ng-transclude></div>\n</div>',
            link: function (scope) {
                scope.isContentVisible = false;
                scope.toggleContent = function () {
                    scope.isContentVisible = !scope.isContentVisible
                }
            }

        }
    })

    .controller('Demo9Ctrl', [function () {

    }]);


