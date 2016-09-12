(function() {

    'use strict';

    angular
        .module('proint2.ahp')
        .directive("addAlternative", function($compile){
              return{
                restrict: 'AE',
                link: function(scope , element,attr){

                   element.bind("click", function(e){
                   scope.alternativeCount++;
                   var container =   angular.element(document.querySelector("#alternativesList"));
                   var childNode = $compile('<div class="input-field col s12 m12 l12"><input id="alternative'+scope.count+'" type="text" class="validate"><label class="active" for="alternative'+scope.count+'">Alternativa '+scope.count+' </label></div>')(container);
                   container.append(childNode);

                   });
                }
            };
        });

}());
