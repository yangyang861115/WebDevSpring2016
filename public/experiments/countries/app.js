/**
 * Created by yangyang on 4/6/16.
 */
(function () {
    var countryApp = angular.module('countryApp', ['ngRoute']);

    countryApp.config(configuration);
    countryApp.factory('countryFactory', countryFactory);
    countryApp.controller('CountryListCtrl', countryListCtrl);
    countryApp.controller('CountryDetailCtrl', countryDetailCtrl);
    countryApp.filter('encodeURI', encodeURI);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'country-list.html',
                controller: 'CountryListCtrl'
            })
            .when('/:countryName', {
                templateUrl: 'country-detail.html',
                controller: 'CountryDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    function countryFactory($http){
        var cachedData;

        return {
            list: list,
            find: find
        };

        //function list(callback){
        //    if(cachedData) {
        //        callback(cachedData);
        //    } else {
        //        $http.get('countries.json').success(function(data){
        //            cachedData = data;
        //            callback(data);
        //        });
        //    }
        //}

        //simplified version for cache option
        function list(callback){
            $http({
                method: 'GET',
                url: 'countries.json',
                cache: true
            }).success(callback);
        }

        function find(name, callback){
            list(function(data) {
                var country = data.filter(function(entry){
                    return entry.name === name;
                })[0];
                callback(country);
            });
        }
    }

    function countryListCtrl($scope, countryFactory) {
        countryFactory
            .list(function(data) {
                $scope.countries = data;
            });

    }

    function countryDetailCtrl($scope, $routeParams, countryFactory) {
        countryFactory
            .find($routeParams.countryName, function(data){
                $scope.country = data;
            });
    }

    function encodeURI(){
        return window.encodeURI;
    }

})();