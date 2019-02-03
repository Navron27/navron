$(document).ready(function(){

	var btnLogin 				= $('#btn-login');
	var btnSearch 			= $('#btn-search');
	var wrapperLogin 		= $('.wrapper-login');
	
	btnLogin.on('click', function (event) {
		
		event.preventDefault();
		
		wrapperLogin.toggleClass('active-box');
	})
});