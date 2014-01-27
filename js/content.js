var con = angular.module('app', ['ngRoute']);

con.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
		controller:'homeCtrl',
		templateUrl:'contents/home.html'
	})
		.when('/', {
		redirectTo:'/home'
	})
});
