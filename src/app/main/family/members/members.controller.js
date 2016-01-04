(function ()
{
    'use strict';

    angular.module('app.family.members')
        .controller('MembersController', MembersController);

    /** @ngInject */
    function MembersController(Timeline, About,$stateParams,userService,$location,$sce,$mdDialog,$scope,$log,$q)
    {
        var vm = this;
        
        vm.member = {};
        vm.simulateQuery = true;
        vm.isDisabled    = false;
        vm.querySearch  = querySearch;
        vm.memberlist = {};
        vm.profilePath = "http://127.0.0.1:8080/socialNetwork/service/public/avatars/";
        userService.getFamilyMembers().then(function(response){
            vm.memberlist = response.data;
            console.log(vm.memberlist);
        });


        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange   = searchTextChange;
        vm.addMember = addMember;


        function querySearch (query) {
          $log.info('Query for ' + query);

          if(!query || query.length < 3){
            return;
          }
          var deferred = $q.defer();
          userService.findMember(query).then(function(response){
            return deferred.resolve( response.data );
          })

          return deferred.promise;
        }

        function searchTextChange(text) {
          $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {          
          vm.member.username = item.value;
        }

        function addMember(){
            console.log(vm.member);
            if(vm.member.relation != 1 ||vm.member.relation !=2 )
            {
                alert("Choose relation with member.");
                return;
            }

            userService.addFamilyMember(vm.member).then(function(response){
                vm.memberlist = response.data;
                vm.member ={};
            });
        }
    }

})();
