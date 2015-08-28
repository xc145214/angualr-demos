/**
 * Created by Administrator on 2015/10/210.
 */


angular.module("myApp.demo10", ["ngRoute"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/demo10', {
            templateUrl: 'demo10/demo10.html',
            controller: 'Demo10Ctrl'
        });
    }])

    .directive('dumbPassword', function () {
        var validElement = angular.element('<div>{{model.input}}</div>');
        this.link = function (scope, element) {
            scope.$watch('model.input', function (value) {
                if (value === 'password') {
                    console.log(element);
                    validElement.toggleClass('alert-box alert');
                }
            })
        };
        return {
            restrict: "E",
            replace: true,
            template: '<div>\n\t<input type="text" ng-model="model.input"/>\n</div>',
            compile: function (tElem) {
                tElem.append(validElement);
                return link;
            }

        }
    })

    .controller('Demo10Ctrl', [function () {

    }]);


