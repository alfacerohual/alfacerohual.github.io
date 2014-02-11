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
		.when('/about', {
		controller:'aboutCtrl',
		templateUrl:'contents/about.html'
	})
		.when('/products', {
		controller:'productsCtrl',
		templateUrl:'contents/product.html'
	})
		.when('/', {
		redirectTo:'/home'
	})
});

/*-------------- Product loads -------------------*/

function pLoads(prod){
	if(prod=='e'){
		var url = 'contents/products/electrodes.html';
	}else if(prod=='w'){
		
	}else if(prod=='f'){

	}
	$.get(
			url,
		{
			//varPage:null
		},
		function(data){
			$('.oShow').html(data);
		}
	);
}
