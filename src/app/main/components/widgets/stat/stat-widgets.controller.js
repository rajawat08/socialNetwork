(function ()
{
    'use strict';

    angular
        .module('app.components.widgets.stat')
        .controller('StatWidgetsController', StatWidgetsController);

    /** @ngInject */
    function StatWidgetsController()
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
            title : 'BOUNCE RATE',
            value : 80,
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget4 = {
            title        : 'STOCK COUNT',
            value        : 5583,
            lastWeekValue: 5583,
            lastWeekDiff : '- 0%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget5 = {
            title: 'USERS ONLINE',
            value: 658
        };

        vm.widget6 = {
            title: 'WASTELANDERS',
            value: 358
        };

        vm.widget7 = {
            title: 'VAULTS SEALED',
            value: 24
        };

        vm.widget8 = {
            title: 'VAULTS OPEN',
            value: 62
        };

        vm.widget9 = {
            title: 'SONGS',
            value: 210
        };

        vm.widget10 = {
            title: 'VIDEOS',
            value: 54
        };

        vm.widget11 = {
            title: 'DOCUMENTS',
            value: 1252
        };

        vm.widget12 = {
            date       : 'June 27, Saturday',
            temperature: 28,
            event      : 'Sunny',
            icon       : 'icon-weather-cloudy',
            location   : 'New York, NY',
            detail     : [
                {
                    day        : 'Sun',
                    icon       : 'icon-weather-rainy',
                    temperature: 24,
                    event      : 'Rainy'
                },
                {
                    day        : 'Mon',
                    icon       : 'icon-weather-pouring',
                    temperature: 23,
                    event      : 'Rainy'
                },
                {
                    day        : 'Tue',
                    icon       : 'icon-weather-cloudy',
                    temperature: 29,
                    event      : 'Overcast'
                },
                {
                    day        : 'Wed',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 28,
                    event      : 'Sunny'
                },
                {
                    day        : 'Thu',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 31,
                    event      : 'Sunny'
                }
            ]
        };

        vm.widget13 = {
            date       : 'June 28, Saturday',
            temperature: 16,
            event      : 'Rainy',
            icon       : 'icon-weather-rainy',
            location   : 'Moscow',
            detail     : [
                {
                    day        : 'Sun',
                    icon       : 'icon-weather-rainy',
                    temperature: 24,
                    event      : 'Rainy'
                },
                {
                    day        : 'Mon',
                    icon       : 'icon-weather-pouring',
                    temperature: 23,
                    event      : 'Rainy'
                },
                {
                    day        : 'Tue',
                    icon       : 'icon-weather-cloudy',
                    temperature: 29,
                    event      : 'Overcast'
                },
                {
                    day        : 'Wed',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 28,
                    event      : 'Sunny'
                },
                {
                    day        : 'Thu',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 31,
                    event      : 'Sunny'
                }
            ]
        };

        vm.widget14 = {
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
        // Methods

        //////////
    }

})();