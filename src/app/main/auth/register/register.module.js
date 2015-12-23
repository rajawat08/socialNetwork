(function ()
{
    'use strict';

    angular
        .module('app.auth.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.auth_register', {
            url  : '/auth/register',
            views: {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.auth_register': {
                    templateUrl: 'app/main/auth/register/register.html',
                    controller : 'RegisterController as vm'
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/auth/register');
    }

})();
