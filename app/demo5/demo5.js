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

    .controller("App1Ctrl",["$scope",function($scope){

        $scope.ctrlFlavor = "blackBerry";


    }])

    .directive("drink", function () {
        return {

            scope:{
                flavor:"@"
            },
            template:'<div>{{flavor}}</div>',

        }
    })

    .directive("drink1",function(){
        return {
            scope:{},
            template:'<div>{{flavor}}</div>',
            link:function(scope,element,attrs){
                scope.flavor=attrs.flavor;
            }
        }
    })

    .directive("drink2",function(){
        return {
            scope:{
                flavor:"="
            },
            template:'<div>{{flavor}}</div>'

        }
    })

    .directive("drink3",function(){
        return {
            scope:{
                flavor:"="
            },
            template:'<input type="text" ng-model="flavor"/>'

        }
    })

    .controller("App2Ctrl",["$scope",function($scope){
        $scope.callHome= function(message){
            alert(message);
        }
    }])
    .directive("phone",function(){
        return{
            scope:{
                dial:'&'
            },
            template:'<input type="text" ng-model="value"/>' +
            '<div class="button" ng-click="dial({message:value})">Call Home!</div>'
        }
    })
    .controller('Demo5Ctrl', [function () {

    }]);