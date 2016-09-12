(function () {
    'use strict';
    angular.module('proint2.ahp').controller('Step1RetrieveCtrl', Step1RetrieveCtrl);

    Step1RetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','$stateParams'];

    function Step1RetrieveCtrl($scope, $rootScope, $location, APP_SETTING,$stateParams) {

        var vm = this;

        vm.patientId = $stateParams.id;


        vm.createPatient = createPatient;
        vm.returnRoute = returnRoute;

        // activate();

        function activate() {
            return getPatients().then(function() {
                // console.log('Activated Patients View');
            });
        }

        // vm.disciplines = DisciplinesPrepService.disciplinas;
        // console.log(vm.disciplines);
        //////////////////////////////////////////////////////////

        function returnRoute(){
            $location.path("/dashboard");
        }


    }
})();
