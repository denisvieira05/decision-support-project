(function () {
    'use strict';
    angular.module('proint2.ahp')
    .controller('AHPRetrieveCtrl', AHPRetrieveCtrl);


    AHPRetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','$stateParams'];

    function AHPRetrieveCtrl($scope, $rootScope, $location, APP_SETTING,$stateParams) {
        var vm = this;

        vm.returnRoute = returnRoute;

        // activate();

        function activate() {
            return getPatients().then(function() {
                // console.log('Activated Patients View');
            });
        }

        //////////////////////////////////////////////////////////

        function returnRoute(){
            $location.path("/dashboard");
        }

        function createPatient(patient){
          console.log(patient);
            return PatientsService.create(patient).then(function(data){
                console.log("Usuário Criado:",patient);
                vm.patients.push(patient);
            },
            function(){
                alert('erro');
            });
        }

       function getPatients(){
            return PatientsService.listar().then(function(data){
                vm.patients = data.items;
                console.log(vm.patients);
                return vm.patients;
            },
            function(){
                alert('erro');
            });
        }

    }
})();
