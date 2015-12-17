(function ()
{
    'use strict';

    angular.module('app.ui.colors')
        .controller('ColorsController', ColorsController);

    /** @ngInject */
    function ColorsController(fuseTheming, $mdDialog, $document)
    {
        var vm = this;
        // Data
        vm.themes = fuseTheming.themes;

        // Methods
        vm.createTheme = createTheme;
        //////////

        function createTheme(ev)
        {
            $mdDialog.show({
                controller         : 'CustomThemeDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/ui/colors/dialogs/custom-theme/custom-theme-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true
            });
        }

    }
})();


