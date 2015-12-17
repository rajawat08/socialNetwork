(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TaskDialogController', TaskDialogController);

    /** @ngInject */
    function TaskDialogController($mdDialog, task)
    {
        var vm = this;

        // Data
        vm.title = 'Edit Task';
        vm.task = task;

        if ( !vm.task )
        {
            vm.task = {};
            vm.title = 'New Task';
            vm.task.tags = [];
        }

        // Methods
        vm.closeDialog = closeDialog;
        vm.newTag = newTag;
        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }

        function newTag(chip)
        {
            var tagColors = ['#388E3C', '#F44336', '#FF9800', '#0091EA'];

            return {
                title: chip,
                color: tagColors[Math.floor(Math.random() * (tagColors.length))]
            };
        }
    }
})();