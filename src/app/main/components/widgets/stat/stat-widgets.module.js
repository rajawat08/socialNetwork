(function ()
{
    'use strict';

    angular
        .module('app.components.widgets.stat', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_widgets_stat', {
            url  : '/components/widgets/stat',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/widgets/stat/stat-widgets.html',
                    controller : 'StatWidgetsController as vm'
                }
            }
        });
    }

})();