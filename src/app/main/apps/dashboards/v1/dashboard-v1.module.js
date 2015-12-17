(function ()
{
    'use strict';

    angular
        .module('app.dashboard-v1', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.dashboard-v1', {
            url  : '/dashboard',
            views: {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/v1/dashboard-v1.html',
                    controller : 'DashboardV1Controller as vm'
                }
            }
        });
    }

})();