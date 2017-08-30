var myApp = angular.module("myApp", ['ui.router', 'ngResource', 'ui.bootstrap']);
myApp.controller("MainController", MainController);
myApp.controller("InventoryController", InventoryController);
myApp.service("$productService", ProductService);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/main.html',
            controller: MainController,
            controllerAs: 'controller'
        }) .state('inventory', {
            url: '/inventory',
            templateUrl: '/ngApp/views/inventory.html',
            controller: InventoryController,
            controllerAs: 'controller'
        });

    // Handle request for non-existent route
    $urlRouterProvider.otherwise('/notFound');

    // Enable HTML5 navigation
    $locationProvider.html5Mode(true);
});