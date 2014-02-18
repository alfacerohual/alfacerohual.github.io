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

$.urlParam = function(name){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    return results[1] || 0;
}

con.controller('productsCtrl', function($scope){
	alert($.urlParam('hello'));
})

/*-------------- Product loads -------------------*/

function pLoads(prod){
	if(prod=='e'){
		var url = 'contents/products/electrodes.html';
		var hs = "/#/products/electrodes";
	}else if(prod=='w'){
		var url = 'contents/products/wire.html';
	}else if(prod=='f'){
		var url = 'contents/products/fund.html';
	}
	$.get(
			url,
		{
			//varPage:null
		},
		function(data){
			history.pushState(data,'',hs);
			$('.oShow').html(data);
		}
	);
}

function productsL(p){
	if(p=='a63'){
		var url = 'contents/products/proList/a63.html';
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
			$('.pShow').html(data);
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
