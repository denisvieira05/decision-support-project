(function () {
    'use strict';
    angular.module('proint2.ahp').controller('Step2RetrieveCtrl', Step2RetrieveCtrl);

    Step2RetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS', '$stateParams', 'AlternativeService', 'CriterionService', 'localStorageService'];

    function Step2RetrieveCtrl($scope, $rootScope, $location, APP_SETTING,$stateParams, AlternativeService, CriterionService, localStorageService) {

        var vm = this;

        activate();

        function activate() {
            getAlternatives().then(function() {
                // console.log('Activated Alternatives View');
            });
            getCriterions().then(function() {
                // console.log('Activated Criterions View');
            });
        }

        //////////////////////////////////////////////////////////

        function getAlternatives(){
             return AlternativeService.listar().then(function(data){
                 vm.alternatives = data;
             },
             function(){
                 alert('erro');
             });
         }

        function getCriterions(){
             return CriterionService.listar().then(function(data){
                 vm.criterions = data;
             },
             function(){
                 alert('erro');
             });
         }

         function gerarAlternativas(){

            vm.alternativesToCompare = [];

            for (var i = 0; i < vm.alternatives.length; i++) {
              [{
                id: 1,
                alternative1: vm.alternatives[i],
                alternative2: vm.alternatives[i+1]
               }]
            }

            vm.alternatives
         }


    }
})();
