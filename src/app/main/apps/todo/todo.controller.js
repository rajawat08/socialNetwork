(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TodoController', TodoController);

    /** @ngInject */
    function TodoController($document, $mdDialog, $mdSidenav, Tasks, Tags)
    {
        var vm = this;

        // Data
        vm.checked = [];
        vm.colors = ['blue', 'blue-grey', 'orange', 'pink', 'purple'];

        vm.projects = {
            'creapond'    : 'Project Creapond',
            'withinpixels': 'Project Withinpixels'
        };

        vm.selectedFilter = {
            filter: 'Start Date',
            next  : 'Next 3 days'
        };

        vm.selectedProject = 'creapond';

        vm.tasks = Tasks.data;
        vm.tags = Tags.data;

        // Methods
        vm.openTaskDialog = openTaskDialog;
        vm.toggleCheck = toggleCheck;
        vm.toggleSidenav = toggleSidenav;

        //////////

        /**
         * Open new task dialog
         *
         * @param ev
         * @param task
         */
        function openTaskDialog(ev, task)
        {
            $mdDialog.show({
                controller         : 'TaskDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/todo/dialogs/task/task-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    task: task
                }
            });
        }

        /**
         * Toggle checked status of the task
         *
         * @param task
         * @param event
         */
        function toggleCheck(task, event)
        {
            event.stopPropagation();
            task.checked = !task.checked;
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }
    }
})();
