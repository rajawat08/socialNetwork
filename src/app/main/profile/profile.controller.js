(function ()
{
    'use strict';

    angular.module('app.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(Timeline, About, PhotosVideos,$stateParams,userService)
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
            vm.about = response.data.about;
        });
        
    }

})();
