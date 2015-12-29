(function ()
{
    'use strict';

    angular.module('app.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(Timeline, About, PhotosVideos,$stateParams,userService,$location,$sce,$mdDialog,$scope)
    {
        var vm = this;
        console.log($stateParams.username);


        // Data
        //vm.posts = Timeline.posts;
        //vm.activities = Timeline.activities;
        //vm.about = About.data;
        //vm.photosVideos= PhotosVideos.data;

        userService.getUserProfile($stateParams.username).then(function(response){
            console.log(response);
            if(!response.status){
                $location.path("/dashboard");
                return false;
            }
            vm.about = response.data.about;
            vm.about.info.birthday = new Date(vm.about.info.birthday);
        });

        vm.getAboutMe = function(){
            if(!vm.about) return;
            return $sce.trustAsHtml(vm.about.info.about_me);
        }

        // save user general information 
        vm.saveInformation =function(){
            console.log("general Information",vm.about);
            if(!vm.about.name || !vm.about.username || !vm.about.email) {
                alert("name,username and email should not be empty");
                return;
            }
                
            userService.updateProfile(vm.about).then(function(response){
                console.info("saveInformation method response",response);
                if(response.status){
                    //vm.about = response.data;
                    alert(response.message);
                }
                
                //vm.showAlert($event);

            })

        }
    vm.showAlert = function (ev){
         // to prevent interaction outside of dialog
    $mdDialog.show(
            $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title('This is an alert title')
                    .content('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
    );
    }

    $scope.showTabDialog = function(ev) {
    $mdDialog.show({
      controller: ProfileController,
      templateUrl: 'app/main/profile/tabs/dialogs/tabDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
  };
        
    }

})();
