(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['IspService', '$rootScope', '$http', 'NgTableParams'];

    function HomeController(IspService, $rootScope, $http, NgTableParams) {

        var vm = this;

        initController();

        function initController() {

            loadAllIsp();



        }

        function loadAllIsp() {
            IspService.GetAll()
                .then(function(isps) {

                    vm.tableParams = new NgTableParams({}, { dataset: isps.data });




                });

        }

    }

})();
