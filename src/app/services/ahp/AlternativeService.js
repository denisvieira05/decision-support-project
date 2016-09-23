(function() {

	'use strict';

	angular
		.module('proint2')
		.service('AlternativeService',AlternativeService);

	AlternativeService.$inject = ['$http', '$location','$q','APP_SETTINGS','localStorageService'];

	function AlternativeService($http, $location,$q,APP_SETTINGS,localStorageService){

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

			itemList = localStorageService.get("alternativesList");

			if(!itemList){
					itemList = [{ id: 1, text: "Teste Alternativa" }];
					localStorageService.set("alternativesList",itemList);
			}

			retorno.resolve(itemList);

			return retorno.promise;
		}


		function add(item){

				var retorno = $q.defer();
        var newId   = itemList.length+1;

        var itemToAdd = { id: newId, text: item.text };

				itemList = localStorageService.get('alternativesList');
        itemList.push(itemToAdd);
				localStorageService.set("alternativesList",itemList);

				retorno.resolve(itemToAdd);

				return retorno.promise;
		}


		function getItemWithId(id){

        var retorno = $q.defer();

        var result = $.grep(alternativesList, function(e){ return e.id == id; });

        retorno.resolve(result);



				return retorno.promise;

		}

		function edit(id){

				var retorno = $q.defer();

					retorno.resolve(result);


				return retorno.promise;

		}

    function remove(id){
      var retorno = $q.defer();

        retorno.resolve(id);


      return retorno.promise;
    }

	}

}());
