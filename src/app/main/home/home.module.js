(function ()
{
    'use strict';

    angular
        .module('app.home', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.home', {
            url  : '/home',
            views: {
                'content@app': {
                    templateUrl: 'app/main/home/home.html',
                    controller : 'HomeController as vm'
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

        $translatePartialLoaderProvider.addPart('app/main/home');

    }

})();