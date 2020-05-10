(function(){
	'use strict';
	var app = angular.module('appSpline', ['ngRoute']);
	
	app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html'
		})
		.when('/home',{
			templateUrl: 'partials/home.html'
		})
		.when('/aboutus',{
			templateUrl: 'partials/about-us.html'
		})
		.when('/services',{
			templateUrl: 'partials/services.html'
		})
		.when('/contact',{
			templateUrl: 'partials/contacts.html'
		})
		.when('/careers',{
			templateUrl: 'partials/careers.html'
		})
		.when('/clients',{
			templateUrl: 'partials/clients.html'
		})
		.otherwise({ redirectTo: '/404' });

		/*$locationProvider.html5Mode(true);*/

	}]);

	/* Header */	
	app.directive('appheader', function() {
    return {
	      templateUrl: "partials/header.html"
	    };
	});

})();
