/**
 * Created by Administrator on 2015/8/28.
 */
/**
 * Created by Administrator on 2015/11/211.
 */


angular.module("myApp.demo11", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo11', {
            templateUrl: 'demo11/demo11.html',
            controller: 'Demo11Ctrl'
        });
    }])


    .controller('MyCtrl', function ($scope,$http) {
        console.log($scope);
    })
    .controller('lessonNavCtrl', function ($scope,$http,$parse) {
        console.log($scope);
    })
    .directive('myDirective',function($http,$parse){
        return{
            link: function (scope, element, attrs) {
                console.log(element);
            }
        }
    })

    .controller('Demo11Ctrl', [function () {

    }]);


