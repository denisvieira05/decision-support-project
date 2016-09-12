(function () {
    'use strict';
    angular.module('proint2.ahp').controller('Step3RetrieveCtrl', Step3RetrieveCtrl);

    Step3RetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','$stateParams'];

    function Step3RetrieveCtrl($scope, $rootScope, $location, APP_SETTING,$stateParams) {

        var vm = this;

        vm.disciplines = [];
        vm.selectedDisciplines = [];
        vm.patientId = $stateParams.id;


        vm.createPatient = createPatient;
        vm.returnRoute = returnRoute;
        // vm.getGrid = getGrid;

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
