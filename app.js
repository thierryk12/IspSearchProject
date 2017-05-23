(function() {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngTable'])
        .config(config).run();;

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/home' });
    }



})();
