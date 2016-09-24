(function() {

	'use strict';

	angular
		.module('proint2')
		.service('CriterionService',CriterionService);

	CriterionService.$inject = ['$http', '$location','$q','APP_SETTINGS','localStorageService'];

	function CriterionService($http, $location,$q,APP_SETTINGS,localStorageService){

		  var itemList = [];

	    var service = {
	        listar: listar,
					add: add,
					getItemWithId: getItemWithId,
					edit: edit,
					remove: remove,
	    };

	    return service;

		///////////////////////////

		function listar() {
			var retorno = $q.defer();

			itemList = localStorageService.get("criterionsList");

			if(!itemList){
					itemList = [{ id: 1, text: "Teste Critério" }];
					localStorageService.set("criterionsList",itemList);
			}

			retorno.resolve(itemList);

			return retorno.promise;
		}


		function add(item){
				var retorno = $q.defer();
        var newId   = itemList.length+1;

				var itemToAdd = { id: newId, text: item.text };

				itemList = localStorageService.get('criterionsList');
				itemList.push(itemToAdd);
				localStorageService.set("criterionsList",itemList);

				retorno.resolve(itemToAdd);


				return retorno.promise;
		}


		function getItemWithId(id){
        var retorno = $q.defer();

        var result = $.grep(criterionsList, function(e){ return e.id == id; });

        retorno.resolve(result);

				// localStorageService.get('criterionsList').success(function(data) {
				// 	retorno.resolve(data);
				// })
				// .error(function() {
				// 	alert("Aconteceu algo ruim! Verifique sua conexão de internet");
				// });

				return retorno.promise;

		}

		function edit(id){
				var retorno = $q.defer();

					retorno.resolve(result);


				return retorno.promise;

		}

    function remove(item){
      var retorno = $q.defer();

			itemList = localStorageService.get('criterionsList');

			for(var i = itemList.length-1; i--;){
				if (itemList[i].id === item.id){
					itemList.splice(i, 1);
				}
			}

			localStorageService.set("criterionsList",itemList);
      retorno.resolve(itemList);


      return retorno.promise;
    }

	}

}());
