(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('AppController', AppController);

    /** @ngInject */
    function AppController(fuseTheming,$rootScope,$scope,auth,$location)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;
        var userAuth = localStorage.getItem("authorization");
        console.info(userAuth);
        auth.getUserData(userAuth).then(function(response){
            console.log(response.data);
            if(!response.status){
                localStorage.removeItem("authorization");
                $rootScope.userData = null;
                $location.path("/auth/login");
                return false;
            }
            $rootScope.userData = response.data;
        })

        
    }
})();
