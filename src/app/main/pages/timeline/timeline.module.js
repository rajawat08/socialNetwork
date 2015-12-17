(function ()
{
    'use strict';

    angular
        .module('app.pages.timeline', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.pages_timeline', {
            url    : '/pages/timeline',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/pages/timeline/timeline.html',
                    controller : 'TimelineController as vm'
                }
            },
            resolve: {
                Timeline: function (apiResolver)
                {
                    return apiResolver.resolve('timeline@get');
                }
            }
        });
    }

})();