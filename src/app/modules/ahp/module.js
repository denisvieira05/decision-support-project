(function() {

    'use strict';

    angular
        .module('proint2.ahp', ['ui.router'])
        .config(config);


    function config($stateProvider, $urlRouterProvider) {

        var modulePath = 'app/modules/ahp/views/';

        $stateProvider
          .state('ahp', {
            url: '/ahp',
            templateUrl: modulePath+'index.html',
            controller: 'AHPRetrieveCtrl',
            controllerAs: 'vm'
          });
    }

}());
