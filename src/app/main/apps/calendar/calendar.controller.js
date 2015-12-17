(function ()
{
    'use strict';

    angular.module('app.calendar')
        .controller('CalendarController', CalendarController);

    /** @ngInject */
    function CalendarController($scope, $mdDialog, $document)
    {
        var vm = this;

        // Data
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        vm.events = [
            [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end  : new Date(y, m, d - 2)
                },
                {
                    id    : 999,
                    title : 'Repeating Event',
                    start : new Date(y, m, d - 3, 16, 0),
                    allDay: false
                },
                {
                    id    : 999,
                    title : 'Repeating Event',
                    start : new Date(y, m, d + 4, 16, 0),
                    allDay: false
                },
                {
                    title : 'Birthday Party',
                    start : new Date(y, m, d + 1, 19, 0),
                    end   : new Date(y, m, d + 1, 22, 30),
                    allDay: false
                },
                {
                    title: 'All Day Event',
                    start: new Date(y, m, d + 8, 16, 0)
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d + 12, 16, 0)
                },
                {
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 2, 0)
                },
                {
                    id   : 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 4, 0)
                },
                {
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 2, 0)
                },
                {
                    id   : 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 4, 0)
                },
                {
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 2, 0)
                },
                {
                    id   : 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 4, 0)
                },
                {
                    title: 'Conference',
                    start: new Date(y, m, d + 17, 4, 0)
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d + 22, 4, 0),
                    end  : new Date(y, m, d + 24, 4, 0)
                }
            ]
        ];

        vm.calendarUiConfig = {
            calendar: {
                editable     : true,
                eventLimit   : true,
                header       : '',
                dayNames     : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                viewRender   : function (view)
                {
                    vm.calendarView = view;
                    vm.calendar = vm.calendarView.calendar;
                    vm.currentMonthShort = vm.calendar.getDate().format('MMM');
                },
                columnFormat : {
                    month: 'ddd',
                    week : 'ddd M',
                    day  : 'ddd M'
                },
                eventClick   : eventDetailDialog,
                selectable   : true,
                selectHelper : true,
                select       : dateSelection
            }
        };

        // Methods
        vm.eventDialog = eventDialog;
        vm.next = next;
        vm.prev = prev;

        //////////

        function next()
        {
            vm.calendarView.calendar.next();
        }

        function prev()
        {
            vm.calendarView.calendar.prev();
        }

        function dateSelection(start, end, jsEvent)
        {
            eventDialog('add', jsEvent, start);
        }

        function eventDialog(type, ev, start, event)
        {
            var title = (type === 'add') ? 'Add Event' : 'Edit Event';
            $mdDialog.show({
                controller         : 'EventDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/calendar/dialogs/event/event-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    start: start,
                    title: title,
                    event: event
                }
            });
        }

        function eventDetailDialog(event, jsEvent)
        {
            $mdDialog.show({
                controller         : 'EventDetailDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/calendar/dialogs/event-detail/event-detail-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : jsEvent,
                clickOutsideToClose: true,
                locals             : {
                    event      : event,
                    eventDialog: eventDialog
                }
            });
        }
    }

})();
