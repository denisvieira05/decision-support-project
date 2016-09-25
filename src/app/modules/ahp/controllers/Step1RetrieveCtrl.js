(function () {
    'use strict';
    angular.module('proint2.ahp').controller('Step1RetrieveCtrl', Step1RetrieveCtrl);

    Step1RetrieveCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','$stateParams','AlternativeService','CriterionService','localStorageService'];

    function Step1RetrieveCtrl($scope, $rootScope, $location, APP_SETTING,$stateParams,AlternativeService,CriterionService,localStorageService) {

        var vm = this;

        $scope.criterioCount    = 0;
        $scope.alternativeCount = 0;
        $scope.unbind           = localStorageService.bind($scope, 'problemDescription');

        vm.alternatives = [];
        vm.criterions = [];

        vm.addAlternative    = addAlternative;
        vm.removeAlternative = removeAlternative;
        vm.editAlternative   = editAlternative;
        vm.getAlternative    = getAlternative;
        vm.addCriterion      = addCriterion;
        vm.removeCriterion   = removeCriterion;
        vm.editCriterion     = editCriterion;
        vm.update            = updateProblemDescription;
        vm.getCriterion      = getCriterion;

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

       function getAlternative(alternative){
            $('#editAlternativeModal').openModal();
            var alternativeObjToEdit =  { id: alternative.id, text: alternative.text };
            vm.alternativeToEdit = alternativeObjToEdit;
        }

       function getCriterion(criterion){
            $('#editCriterionModal').openModal();
            var criterionObjToEdit =  { id: criterion.id, text: criterion.text };
            vm.criterionToEdit = criterionObjToEdit;
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

        function editAlternative(alternative){
            return AlternativeService.edit(alternative).then(function(indexToUpdate){
              console.log("indexToUpdate".indexToUpdate);
                vm.alternatives[indexToUpdate] = alternative;
                Materialize.toast('Alternativa Editada !', 2000, 'rounded');
            },
            function(){
                alert('erro');
            });
        }

        function removeAlternative(alternative){
            return AlternativeService.remove(alternative).then(function(data){
                var index = vm.alternatives.indexOf(alternative);
                vm.alternatives.splice(index, 1);
                Materialize.toast('Alternativa Removida !', 2000, 'rounded');
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

        function editCriterion(criterion){
            return CriterionService.edit(criterion).then(function(indexToUpdate){
                vm.criterions[indexToUpdate] = criterion;
                Materialize.toast('Critério Editado !', 2000, 'rounded');
            },
            function(){
                alert('erro');
            });
        }

        function removeCriterion(criterion){
            return CriterionService.remove(criterion).then(function(data){
                var index = vm.criterions.indexOf(criterion);
                vm.criterions.splice(index, 1);
                Materialize.toast('Critério Removido !', 2000, 'rounded');
            },
            function(){
                alert('erro');
            });
        }


    }
})();
