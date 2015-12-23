(function ()
{
    'use strict';

    angular
        .module('app.auth.forgot-password', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.auth_forgot-password', {
            url  : '/auth/forgot-password',
            views: {
                'main@'                  : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.auth_forgot-password': {
                    templateUrl: 'app/main/auth/forgot-password/forgot-password.html',
                    controller : 'ForgotPasswordController as vm'
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/auth/forgot-password');
    }

})();