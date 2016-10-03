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
					localStorageService.set("alternativesList",itemList);
			}

			retorno.resolve(itemList);

			return retorno.promise;
		}


		function add(item){

				var retorno = $q.defer();

				itemList = localStorageService.get('alternativesList');

				if(!itemList){
					itemList = [{ id: 1, text: item.text }];
					localStorageService.set("alternativesList",itemList);
				}else{
					if(itemList.length == 3){
						// alert("Infelizmente nesta versão só é possível adicionar no máximo 3 alternativas .");
						retorno.resolve(null);
					}else{
						var newId   = itemList.length+1;
						var itemToAdd = { id: newId, text: item.text };
						itemList.push(itemToAdd);
						retorno.resolve(itemToAdd);
						localStorageService.set("alternativesList",itemList);
					}
				}
				
				


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
				itemList		= localStorageService.get('alternativesList');

				for (var i = 0; i < itemList.length; i++) {
					if (itemList[i].id == item.id) {
						 itemList[i].text = item.text;
						 retorno.resolve(i);
						 break;
					}
				}

				localStorageService.set("alternativesList",itemList);

				return retorno.promise;

		}

    function remove(item){
      var retorno = $q.defer();
			itemList 		= localStorageService.get('alternativesList');

			for (var i = 0; i < itemList.length; i++) {
				if (itemList[i].id === item.id){
					console.log("index removed",i);
					itemList.splice(i, 1);
				}
			}

			localStorageService.set("alternativesList",itemList);
			retorno.resolve(item);

      return retorno.promise;
    }

	}

}());
