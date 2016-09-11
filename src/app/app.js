(function(){
        angular.module('proint2', [

        // App Components

        // App Modules Dependencies
        'proint2.dashboard',
        'proint2.ahp',

        // External Dependencies
        'ui.router'
    ])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise("/");

    }]);
})();
