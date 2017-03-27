(function(angular) {
    'use strict';
    angular.module('docsBindExample', [])
        .controller('Controller', ['$scope', function($scope) {
            $scope.name = 'Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)';

            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatre'
            };
        }])
        .controller('IgorController', ['$scope', function($scope) {
            $scope.customer = {
                name: 'Igor',
                address: '123 Somewhere'
            };
        }])
        .directive('myCustomer', function() {
            return {
                template: '<br /><div>Name: {{customer.name}}</div><div>Address : {{customer.address}}</div>'
            };
        }).directive('myCustomerTemplateUrl', function() {
            return {
                restrict: 'E',
                templateUrl: 'my-customer.html'
            };
        }).directive('myCustomerTemplateUrlFunc', function() {
            return {
                templateUrl: function(elem, attr) {
                    return 'customer-' + attr.type + '.html';
                }
            };
        });
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
