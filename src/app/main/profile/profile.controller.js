(function ()
{
    'use strict';

    angular.module('app.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(Timeline, About, PhotosVideos,$stateParams,userService,$location,$sce,$mdDialog,$scope,Upload,$route)
    {
        var vm = this;
        console.log($stateParams.username);
        //vm.profilePath = "http://127.0.0.1:8080/socialNetwork/service/public/avatars/";
        vm.profilePath = "http://manageamazon.com/socialNetwork/service/public/avatars/";

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
            //vm.about.info.profile_icon = vm.about.info.profile_icon;
            console.log(vm.about);
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

     // upload on file select or drop
    $scope.upload = function (file) {
         var userAuth = localStorage.getItem("authorization");
         
        Upload.upload({
            url: 'http://manageamazon.com/socialNetwork/service/public/index.php/member/upload',
            data: {file: file, 'auth': userAuth}
        }).then(function (resp) {
            console.log('Success uploaded. Response: ' + resp.data);
            //vm.about.info.profile_icon = resp.data;
            //vm.success = "Upload Successfully.";
            //$route.reload();
            window.location.reload();
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
        
    }

})();
