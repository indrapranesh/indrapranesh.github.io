	// create the module and name it lifeSaverBot
	var lifeSaverBot = angular.module('lifeSaverBot', ['ngRoute']);

	// configure our routes
	lifeSaverBot.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	lifeSaverBot.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'LifeSaverBot Home Page';
	});

	lifeSaverBot.controller('aboutController', function($scope) {
		$scope.message = 'LifeSaverBot About Page.';
	});

	lifeSaverBot.controller('contactController', function($scope) {
		$scope.message = 'LifeSaverBot Contact Page';
	});