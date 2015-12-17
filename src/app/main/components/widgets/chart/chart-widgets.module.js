(function ()
{
    'use strict';

    angular
        .module('app.components.widgets.chart', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_widgets_chart', {
            url  : '/components/widgets/chart',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/widgets/chart/chart-widgets.html',
                    controller : 'ChartWidgetsController as vm'
                }
            }
        });
    }

})();