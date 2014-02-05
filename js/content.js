var con = angular.module('app', ['ngRoute']);

con.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
		controller:'homeCtrl',
		templateUrl:'contents/home.html'
	})
		.when('/contact', {
		controller:'contactCtrl',
		templateUrl:'contents/contact.html'
	})
		.when('/', {
		redirectTo:'/home'
	})
});
