/**
 * Created by Administrator on 2015/8/26.
 */
angular.module("myApp.demo5", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo5', {
            templateUrl: 'demo5/demo5.html',
            controller: 'Demo5Ctrl'
        });
    }])
    
    .directive("enter", function () {
        return function(scope,element,attrs){
            element.bind("mouseenter", function () {
                console.log("I'm inside of you!");
                element.addClass(attrs.enter)
            })
        }
    })

    .directive("leave",function(){
        return function (scope,element,attrs) {
            element.bind("mouseleave",function(){
                console.log("I' am leave of you!")
                element.removeClass(attrs.enter)
            })

        }
    })

    .directive("kid", function () {
        return {
            restrict:"E",
            scope:{
                done:"&"
            },
            template:'<input type="text" ng-model="chore">' +
            '{{ chore }}'+
                '<div class="button" ng-click="done({chore:chore})">I\'m done</div>'
        }
    })

    .controller("ChoreCtrl",["$scope",function($scope){
        $scope.logChore = function (chore) {
            alert(chore + " is done!");
        }
    }])

    .controller("AppCtrl",["$scope",function($scope){

        $scope.ctrlFlavor = "blackBerry"
    }])
    .directive("drink", function () {
        return {
            //scope:{},
            //template:'<div>{{flavor}}</div>',
            //link:function(scope,element,attrs){
            //    scope.flavor=attrs.flavor;
            //},
            scope:{
                flavor:"@"
            },
            template:'<div>{{flavor}}</div>',

        }
    })
    .controller('Demo5Ctrl', [function () {

    }]);