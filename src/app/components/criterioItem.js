(function() {

    'use strict';

    angular
        .module('proint2.ahp')
        .directive("addCriterio", function($compile){
              return{
                restrict: 'AE',
                link: function(scope , element,attr){

                   element.bind("click", function(e){
                   scope.criterioCount++;
                   var container =   angular.element(document.querySelector("#criteriosList"));
                   var childNode = $compile('<div class="input-field col s12"><input id="criterio'+scope.count+'" type="text" class="validate"><label class="active" for="criterio'+scope.count+'">Critério '+scope.count+' </label></div>')(container);
                   container.append(childNode);

                   });
                }
            };
        });

}());
