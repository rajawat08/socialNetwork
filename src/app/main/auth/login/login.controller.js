(function ()
{
    'use strict';

    angular.module('app.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($scope,auth,$location,$rootScope)
    {
        var vm = this;
        vm.form = {};
        

        // Data

        // Methods
        vm.login = function(){
            console.log(vm);
            if(!vm.form.username || !vm.form.password){
                console.log("error");
                vm.loginMsg = "Please Enter valid username and password"; 
                return;
            }
            auth.login(vm.form.username, vm.form.password).then(function(response){
                console.info(response);
                if(response.status){
                    $rootScope.userData = response.data;
                    localStorage.setItem("authorization",response.data.remember_token);
                    vm.loginMsg = "Login successful....";
                    $location.path("/profile/"+$rootScope.userData.username);
                }else{
                   vm.loginMsg = "Please Enter valid username and password"; 
                }
            });
        }


        //////////
    }
})();