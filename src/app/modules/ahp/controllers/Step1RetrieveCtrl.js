(function () {
    'use strict';
    angular.module('proint2.ahp').controller('Step1RetrieveCtrl', Step1RetrieveCtrl);

    Step1RetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','$stateParams','AlternativeService','CriterionService','localStorageService'];

    function Step1RetrieveCtrl($scope, $rootScope, $location, APP_SETTING,$stateParams,AlternativeService,CriterionService,localStorageService) {

        var vm = this;

        $scope.criterioCount    = 0;
        $scope.alternativeCount = 0;
        $scope.unbind           = localStorageService.bind($scope, 'problemDescription');

        vm.addAlternative = addAlternative;
        vm.addCriterion   = addCriterion;
        vm.update = updateProblemDescription;

        activate();

        function activate() {
            getAlternatives().then(function() {
                // console.log('Activated Alternatives View');
            });
            getCriterions().then(function() {
                // console.log('Activated Alternatives View');
            });
        }

        //////////////////////////////////////////////////////////

        $('.modal-trigger').leanModal({});

        function updateProblemDescription(val) {
          $scope.problemDescription = val;
          $timeout(function() {
            alert("localStorage value: " + localStorageService.get('problemDescription'));
          });
        }

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

        function addAlternative(alternative){
            return AlternativeService.add(alternative).then(function(data){
                vm.newAlternative = "";
                vm.alternatives.push(data);
                Materialize.toast('Alternativa Criada !', 2000, 'rounded');
            },
            function(){
                alert('erro');
            });
        }

        function addCriterion(criterion){
            return CriterionService.add(criterion).then(function(data){
                vm.newCriterion = "";
                vm.criterions.push(data);
                Materialize.toast('Critério Criado !', 2000, 'rounded');
            },
            function(){
                alert('erro');
            });
        }


    }
})();
