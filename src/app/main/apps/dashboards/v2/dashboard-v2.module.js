(function ()
{
    'use strict';

    angular
        .module('app.dashboard-v2', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.dashboard-v2', {
            url  : '/dashboard-v2',
            views: {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/v2/dashboard-v2.html',
                    controller : 'DashboardV2Controller as vm'
                }
            }
        });
    }

})();