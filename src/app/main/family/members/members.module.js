(function ()
{
    'use strict';

    angular
        .module('app.family.members', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.family_members', {
            url  : '/family/members',
            views: {
                'content@app': {
                    templateUrl: 'app/main/family/members/members.html',
                    controller : 'MembersController as vm'
                }
            },
            resolve: {
                Timeline: function (apiResolver)
                {
                    return apiResolver.resolve('profile.timeline@get');
                },
                About: function (apiResolver)
                {
                    return apiResolver.resolve('profile.about@get');
                },
                PhotosVideos: function (apiResolver)
                {
                    return apiResolver.resolve('profile.photosVideos@get');
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/profile');

    }

})();