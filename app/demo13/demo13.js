/**
 * Created by Administrator on 2015/9/9.
 */

angular.module("myApp.demo13", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo13', {
            templateUrl: 'demo13/demo13.html',
            controller: 'Demo13Ctrl'
        });
    }])
    .run(function ($templateCache) {
        $templateCache.put('zippy.html','<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude>Hello world</div></div>');
        $templateCache.info();
    })

    .directive('zippy3',function($templateCache){
        console.log($templateCache.get('zippy.html'));
        return {
            restrict:'E',
            transclude:true,
            scope:{
                title:'@'
            },
            template:$templateCache.ge('zippy.html'),
            link: function (scope) {
                scope.isContentVisible = false;
                scope.toggleContent = function () {
                    scope.isContentVisible = !scope.isContentVisible;
                }
            }
        }
    })
    .controller('Demo13Ctrl', [function () {

    }]);
