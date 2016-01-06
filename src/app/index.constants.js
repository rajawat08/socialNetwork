(function ()
{
    'use strict';
	var domain = "http://127.0.0.1:8080";
	//var domain = "http://manageamazon.com";
    angular
        .module('fuse')
        .constant('CONSTANTS',{
		    'base_path': domain+'/socialNetwork/',
		    'avatar_path': domain + '/socialNetwork/service/public/avatars/',
		    'api_path' : domain + '/socialNetwork/service/public/index.php/'
		});

   
})();
