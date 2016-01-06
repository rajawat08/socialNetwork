(function ()
{
    'use strict';

    angular.module('app.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController(Timeline,$stateParams, userService, $location, $sce, $mdDialog, $scope, Upload, $route,CONSTANTS,$rootScope)
    {
        var vm = this;
        
        
        vm.profilePath = CONSTANTS.avatar_path;
        vm.newPost = {};
        vm.newPost.date = new Date();
        vm.maxDate = new Date();
        // Data
        //vm.posts = Timeline.posts;
        //vm.activities = Timeline.activities;
        //vm.about = About.data;
        //vm.photosVideos= PhotosVideos.data;

        userService.getPosts().then(function(response){
            if(response.status)
            vm.posts = response.data;
            //vm.about = response.data.about;
            // vm.about.info.birthday = new Date(vm.about.info.birthday);
            // vm.about.info.profile_icon = vm.about.info.profile_icon ? vm.profilePath + vm.about.info.profile_icon : null;
            // console.log(vm.about);
        });

        vm.addPost = function(){
            console.info(vm.newPost);
            if(!vm.newPost.text)
            return;
            var c = false;
            console.log(vm.newPost.date);
            $rootScope.loadingProgress = true;
            if(vm.newPost.date){
                var todaysDate = new Date().setHours(0,0,0,0);
                var inputDate = new Date(vm.newPost.date).setHours(0,0,0,0);
                console.info("Dates",inputDate,todaysDate);
                if(inputDate == todaysDate)
                    {
                        console.info("Date equals",inputDate,todaysDate);
                        c = confirm("You need to set your post date, Is this current Date ?")
                    }
                if(c){
                    console.info("Do post");
                    userService.addPost(vm.newPost).then(function(response){
                        console.log(response);
                        if(response.status)
                        vm.posts.push(response.data);
                        vm.newPost ={};
                        vm.newPost.date = new Date();
                        $rootScope.loadingProgress = false;
                    })
                }
            }
            
        }

        
    

     // upload on file select or drop
    $scope.upload = function (file) {
         var userAuth = localStorage.getItem("authorization");
        $rootScope.loadingProgress = true;
        Upload.upload({
            url: CONSTANTS.api_path + 'member/upload',
            data: {file: file, 'auth': userAuth}
        }).then(function (resp) {
            console.log('Success uploaded. Response: ',resp);
            //vm.about.info.profile_icon = resp.data;
            //vm.success = "Upload Successfully.";
            //$route.reload();
            //window.location.reload();
            if(resp && resp.status){
                $rootScope.userData.profile_icon = resp.data.data;
                vm.about.info.profile_icon = resp.data.data;
            }
            
            $rootScope.loadingProgress = false;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
        
    }

})();
