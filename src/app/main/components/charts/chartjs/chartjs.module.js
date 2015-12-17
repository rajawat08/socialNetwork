(function ()
{
    'use strict';

    angular
        .module('app.components.charts.chartjs', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_charts_chartjs', {
            url  : '/components/charts/chartjs',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/charts/chartjs/chartjs.html',
                    controller : 'ChartjsController as vm'
                }
            }
        });
    }

})();