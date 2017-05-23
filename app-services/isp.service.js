(function() {
    'use strict';

    angular
        .module('app')
        .factory('IspService', IspService);

    IspService.$inject = ['$timeout', '$filter', '$q', '$http'];

    function IspService($timeout, $filter, $q, $http) {

        var service = {};

        service.GetAll = GetAll;

        return service;

        function GetAll() {

            var deferred = $q.defer();
            deferred.resolve(getIsps());
            return deferred.promise;
        }


        function getIsps() {
            var data = $http({
                method: 'GET',
                url: '/data/isp.json',
            });

            return data;

        }

        function setIsps(isps) {

        }
    }
})();
