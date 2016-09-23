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
          })
          .state('ahp.intro', {
            url: '/intro',
            templateUrl: modulePath+'intro.html',
            controller: 'AHPRetrieveCtrl',
            controllerAs: 'vm'
          })
          .state('ahp.step1', {
            url: '/step/1',
            templateUrl: modulePath+'step1.html',
            controller: 'Step1RetrieveCtrl',
            controllerAs: 'vm'
          })
          .state('ahp.step2', {
            url: '/step/2',
            templateUrl: modulePath+'step2.html',
            controller: 'Step2RetrieveCtrl',
            controllerAs: 'vm'
          })
          .state('ahp.step3', {
            url: '/step/3',
            templateUrl: modulePath+'step3.html',
            controller: 'Step3RetrieveCtrl',
            controllerAs: 'vm'
          });
    }

}());
