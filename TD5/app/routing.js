angular.module("MainModule").config(['$routeProvider','$locationProvider',
       function($routeProvider,$locationProvider) {
           $routeProvider.
               when('/', {
                   templateUrl: 'templates/main.html',
                   controller: 'MainController',
                   controllerAs: 'mCtrl1'
               }).
               when('/login', {
                   templateUrl: 'templates/login.html',
                   controller: 'MainController',
                   controllerAs: 'mCtrl2'
               }).
			   when('/about', {
                   templateUrl: 'templates/about.html',
                   controller: 'MainController',
                   controllerAs: 'mCtrl3'
               }).
			    when('/in/', {
                   templateUrl: 'templates/main.html',
                   controller: 'InController',
                   controllerAs: 'iCtrl1'
               }).
               when('/in/products', {
                   templateUrl: 'templates/list.html',
                   controller: 'ProductsController',
                   controllerAs: 'pCtrl1'
               }).
			   when('/in/exit', {
                   templateUrl: 'templates/exit.html',
                   controller: 'InController',
                   controllerAs: 'iCtrl2'
               }).
			   when('/in/clients', {
                   templateUrl: 'templates/list.html',
                   controller: 'ClientsController',
                   controllerAs: 'clCtrl1'
               }).otherwise({
                redirectTo: '/'
            });
			   
			if(window.history && window.history.pushState){
               $locationProvider.html5Mode(true);
            }
       }]);