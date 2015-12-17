(function ()
{
    'use strict';

    angular.module('app.dashboard-v1')
        .controller('DashboardV1Controller', DashboardV1Controller);

    /** @ngInject */
    function DashboardV1Controller(fuseTheming)
    {
        var vm = this;

        // Data
        vm.widget1 = {
            title        : 'WEEKLY TRANSACTIONS',
            value        : 30342,
            lastWeekValue: 30002,
            lastWeekDiff : '+ 1,12%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget2 = {
            title        : 'SALES QUOTA',
            value        : 40,
            lastWeekValue: 85,
            lastWeekDiff : '- 45%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget3 = {
            title   : 'BOUNCE RATE',
            value   : 80,
            detail  : 'This is the back side. You can show detailed information here.',
            footnote: '50% lower than yesterday'
        };

        vm.widget4 = {
            title        : 'STOCK COUNT',
            value        : 5583,
            lastWeekValue: 5583,
            lastWeekDiff : '- 0%',
            detail       : 'This is the back side. You can show detailed information here.',
            footnote     : 'New items shipping tomorrow'
        };

        vm.widget5 = {
            title           : 'IO RATE',
            subtitle        : 'Showing last 5 hours',
            chart   : {
                columns: [
                    {
                        id    : 'Sales',
                        name  : 'Sales',
                        color : 'lightgrey',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    },
                    {
                        id    : 'SalesTop',
                        name  : 'Sales Top',
                        color : 'green',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'spline'
                    }
                ]
            },
            activityTitle   : 'Activity Log',
            activitySubtitle: 'Showing last 100 entries',
            activities      : [
                {
                    title: 'Input',
                    value: '50KB'
                },
                {
                    title: 'Input',
                    value: '24.5Mb'
                },
                {
                    title: 'Output',
                    value: '887Kb'
                },
                {
                    title: 'Input',
                    value: '6.27Kb'
                },
                {
                    title: 'Output',
                    value: '13.8Kb'
                },
                {
                    title: 'Output',
                    value: '5.6Mb'
                },
                {
                    title: 'Output',
                    value: '44.6Kb'
                },
                {
                    title: 'Input',
                    value: '5Mb'
                },
                {
                    title: 'Input',
                    value: '5.3Kb'
                },
                {
                    title: 'Output',
                    value: '176Kb'
                },
                {
                    title: 'Input',
                    value: '4.3Mb'
                },
                {
                    title: 'Input',
                    value: '50KB'
                },
                {
                    title: 'Input',
                    value: '24.5Mb'
                },
                {
                    title: 'Output',
                    value: '887Kb'
                },
                {
                    title: 'Input',
                    value: '6.27Kb'
                },
                {
                    title: 'Output',
                    value: '13.8Kb'
                },
                {
                    title: 'Output',
                    value: '5.6Mb'
                },
                {
                    title: 'Output',
                    value: '44.6Kb'
                },
                {
                    title: 'Input',
                    value: '5Mb'
                },
                {
                    title: 'Input',
                    value: '5.3Kb'
                },
                {
                    title: 'Output',
                    value: '176Kb'
                },
                {
                    title: 'Input',
                    value: '4.3Mb'
                }
            ]
        };

        vm.widget6 = {
            title   : 'Google Inc.',
            subtitle: 'NASDAQ: GOOG',
            value   : '531.69',
            diff    : '2.29%',
            chart   : {
                columns: [
                    {
                        id    : 'GOOG',
                        name  : 'GOOG',
                        color : 'orange',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    }
                ]
            }
        };

        vm.widget7 = {
            title   : 'Visitor Demographics',
            tabs: [
                {
                    label: '30 days',
                    genders: [
                        {
                            title: 'Male',
                            value: 40
                        },
                        {
                            title: 'Female',
                            value: 41
                        },
                        {
                            title: 'Not Specified',
                            value: 19
                        }
                    ],
                    ages: [
                        {
                            title: '25 - 34',
                            value: 32
                        },
                        {
                            title: '35 - 44',
                            value: 85
                        },
                        {
                            title: '45+',
                            value: 48
                        }
                    ]
                },
                {
                    label: '10 days',
                    genders: [
                        {
                            title: 'Male',
                            value: 32
                        },
                        {
                            title: 'Female',
                            value: 49
                        },
                        {
                            title: 'Not Specified',
                            value: 19
                        }
                    ],
                    ages: [
                        {
                            title: '25 - 34',
                            value: 85
                        },
                        {
                            title: '35 - 44',
                            value: 60
                        },
                        {
                            title: '45+',
                            value: 36
                        }
                    ]
                },
                {
                    label: '1 day',
                    genders: [
                        {
                            title: 'Male',
                            value: 28
                        },
                        {
                            title: 'Female',
                            value: 62
                        },
                        {
                            title: 'Not Specified',
                            value: 10
                        }
                    ],
                    ages: [
                        {
                            title: '25 - 34',
                            value: 17
                        },
                        {
                            title: '35 - 44',
                            value: 64
                        },
                        {
                            title: '45+',
                            value: 72
                        }
                    ]
                },

            ]
        };

        vm.widget8 = {
            title   : 'SALES',
            subtitle: 'Last 30 days',
            chart           : {
                columns: [
                    {
                        id    : 'Input',
                        name  : 'Input',
                        color : fuseTheming.themes.active.theme.primary.color,
                        values: '30,75,290,400,150,250',
                        type  : 'area-spline'
                    },
                    {
                        id    : 'Output',
                        name  : 'Output',
                        color : fuseTheming.themes.active.theme.accent.color,
                        values: '500,300,120,600,50,80',
                        type  : 'area-spline'
                    }
                ]
            }
        };

        vm.widget9 = {
            title: 'ONLINE MEMBERS',
            value: 658,
            icon: 'icon-account'
        };

        vm.widget10 = {
            title: 'MEMBERS FOR PAST 30 DAYS',
            value: 55,
            icon: 'icon-account-plus'
        };

        vm.widget11 = {
            title: 'TOTAL MEMBERS',
            value: 59962,
            icon: 'icon-account-multiple'
        };

        //////////

    }

})();
