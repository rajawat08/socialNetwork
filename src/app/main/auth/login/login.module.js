(function ()
{
    'use strict';

    angular
        .module('app.auth.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.auth_login', {
            url  : '/auth/login',
            views: {
                'main@'                       : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.auth_login': {
                    templateUrl: 'app/main/auth/login/login.html',
                    controller : 'LoginController as vm'
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/auth/login');
    }

})();