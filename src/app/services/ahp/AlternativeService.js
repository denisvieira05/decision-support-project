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
					// itemList = [{ id: 1, text: "Teste Alternativa" }];
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


		function getItemWithId(item){

        var retorno = $q.defer();

				itemList = localStorageService.get('alternativesList');

				var itemToUpdate;

				for(var i = itemList.length-1; i--;){
					if (itemList[i].id === item.id){
						itemToUpdate = itemList[i];
					}
				}

        retorno.resolve(itemToUpdate);



				return retorno.promise;

		}

		function edit(item){

				var retorno = $q.defer();

				itemList = localStorageService.get('alternativesList');

				var itemToUpdate;

				for(var i = itemList.length-1; i--;){
					if (itemList[i].id === item.id){
						indexToUpdate = i;
						itemList[i].text = item.text;
					}
				}

				retorno.resolve(indexToUpdate);


				return retorno.promise;

		}

    function remove(item){
      var retorno = $q.defer();

			itemList = localStorageService.get('alternativesList');

			for(var i = itemList.length-1; i--;){
				if (itemList[i].id === item.id){
					itemList.splice(i, 1);
				}
			}

			localStorageService.set("alternativesList",itemList);
			retorno.resolve(itemList);

      return retorno.promise;
    }

	}

}());
