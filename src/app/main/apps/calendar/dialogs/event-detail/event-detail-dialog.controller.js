(function ()
{
    'use strict';

    angular.module('app.calendar')
        .controller('EventDetailDialogController', EventDetailDialogController);

    /** @ngInject */
    function EventDetailDialogController($mdDialog, event, eventDialog)
    {
        var vm = this;

        // Data
        vm.event = event;
        vm.eventDialog = eventDialog;

        // Methods
        vm.closeDialog = closeDialog;

        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }
    }
})();
