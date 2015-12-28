(function ()
{
    'use strict';

    angular.module('app.auth.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController($scope,auth,$location,$rootScope)
    {
        var vm = this;

        vm.form = {};

        vm.register = function(){
            vm.signUpMsg = "";
            console.log(vm.form);
            if(!vm.form.name || !vm.form.password || !vm.form.email || !vm.form.passwordConfirm || !vm.form.termCondition){
                console.log("error");
                vm.signUpMsg = "Please Enter valid Details"; 
                return;
            }

            if(vm.form.password != vm.form.passwordConfirm){
                console.log("error");
                vm.signUpMsg = "Confirm Password should match"; 
                return;
            }
            auth.register(vm.form).then(function(response){
                console.info(response);
                if(response.status){
                    vm.signUpMsg = response.message;
                    vm.form ={};                
                   // $location.path("/auth/login");
                }else{
                   vm.signUpMsg = response.message; 
                }
            });
        }
    }
})();