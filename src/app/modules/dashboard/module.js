(function() {

    'use strict';

    angular
        .module('proint2.dashboard', ['ui.router'])
        .config(config);


    function config($stateProvider, $urlRouterProvider) {

        var modulePath = 'app/modules/dashboard/views/';

        $urlRouterProvider.when("/", "/dashboard");
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider
          .state('dashboard', {
            url: '/dashboard',
            templateUrl: modulePath+'index.html',
            controller: 'DashboardRetrieveCtrl',
            controllerAs: 'vm'
          })
          .state('dashboard.invoices', {
            url: '/invoices/:id',
            templateUrl: modulePath+'invoices.html',
            controller: 'PatientInvoicesCtrl',
            controllerAs: 'vm'
          });
    }

    // function GetPatientPrepService(PatientsService,$stateParams) {
    //     return PatientsService.getPatient($stateParams.id).then(function(data){
    //         return data;
    //     })
    //     .catch(function(error) {
    //        // Interpret error
    //        // Cope w/ timeout? retry? try alternate service?
    //        // Re-reject with appropriate error for a user to see
    //     });
    // }
    // resolve: {
    //     GetPatientPrepService: GetPatientPrepService
    // }

}());
