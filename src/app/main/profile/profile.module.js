(function ()
{
    'use strict';

    angular
        .module('app.profile', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.profile', {
            url  : '/profile/:username',
            views: {
                'content@app': {
                    templateUrl: 'app/main/profile/profile.html',
                    controller : 'ProfileController as vm'
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