(function ()
{
    'use strict';

    angular.module('app.calendar')
        .controller('EventDialogController', EventDialogController);

    /** @ngInject */
    function EventDialogController($mdDialog, title, start, event)
    {
        var vm = this;

        // Data
        vm.dialogTitle = title;
        vm.notifications = ['15 minutes before', '30 minutes before', 'one hour before'];

        // Methods
        vm.closeDialog = closeDialog;

        //////////

        // Edit Event
        if ( event )
        {
            vm.event = event;
        }
        // Add New Event
        else
        {
            vm.event = {
                start        : start ? start : '',
                notifications: ['']
            };
        }
        
        function closeDialog()
        {
            $mdDialog.hide();
        }
    }
})();
