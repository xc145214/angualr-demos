/**
 * Created by Administrator on 2015/9/9.
 */

angular.module("myApp.demo12", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo12', {
            templateUrl: 'demo12/demo12.html',
            controller: 'Demo12Ctrl'
        });
    }])

    .directive('zippy2',function(){
        return {
            restrict:'E',
            transclude:true,
            scope:{
                title:'@'
            },
            templateUrl:'zippy.html',
            link: function (scope) {
                scope.isContentVisible = false;
                scope.toggleContent = function () {
                    scope.isContentVisible = !scope.isContentVisible;
                }
            }
        }
    })
    .controller('Demo12Ctrl', [function () {

    }]);
