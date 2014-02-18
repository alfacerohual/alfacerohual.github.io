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
		.when('/products/electrodes',{
		controller:'pElectrodesCtrl',
		templateUrl:'contents/products/electrodes.html'
	})
		.when('/products/wire', {
		controller:'pWireCtrl',
		templateUrl:'contents/products/wire.html'
	})
		.when('/products/fund', {
		controller:'pFundCtrl',
		templateUrl:'contents/products/fund.html'
	})
		.when('/products/electrodes/a63', {
		controller:'a63Ctrl',
		templateUrl:'contents/products/proList/a63.html'
	})
		.when('/', {
		redirectTo:'/home'
	})
});

con.controller('productsCtrl', function($scope){

});

/*-------------- Product loads -------------------*/

function pLoads(prod){
	if(prod=='e'){
		var url = 'contents/product.html';
	}else if(prod=='w'){
		var url = 'contents/product.html';
	}else if(prod=='f'){
		var url = 'contents/product.html';
	}
	$.get(
			url,
		{
			//varPage:null
		},
		function(data){
			//history.pushState(data,'',hs);
			$('.mInc').html(data);
		}
	);
}

function productsL(p){
	if(p=='a63'){
		var url = /*'contents/products/proList/a63.html'*/'contents/products/electrodes.html';
	}else if(p=='a78'){
		var url = 'contents/products/proList/a78.html';
	}else if(p=='a60'){
		var url = 'contents/products/proList/a60.html';
	}else if(p=='azul'){
		var url = 'cotents/products/proList/azul.html';
	}
	$.get(
			url,
		{
			//varPage:null
		},
		function(data){
			$('.sMInc').html(data);
		}
	);

}

/* showing and hiding product details */

function hidsho(d){
	if(d=='s'){
		$('.hidd').show();
		$('#sho').hide();
		$('#hid').show();
	}else{
		$('.hidd').hide();
		$('#sho').show();
		$('#hid').hide();
	}
}
