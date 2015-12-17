(function ()
{
    'use strict';

    angular
        .module('app.ui.colors', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_colors', {
            url  : '/ui/colors',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/colors/colors.html',
                    controller : 'ColorsController as vm'
                }
            }
        });
    }

})();