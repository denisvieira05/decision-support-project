(function () {
    angular.module('proint2').constant('APP_SETTINGS', {
        "API_URL": "https://private-776e9-bluedental.apiary-mock.com"
    });

    angular.module('proint2').run(function ($rootScope, $location) {
        $rootScope.user = null;
        $rootScope.currentPath = $location.path();
        console.log($rootScope.currentPath);

    });
})();
