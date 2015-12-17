(function ()
{
    'use strict';

    angular
        .module('app.components.widgets.chart')
        .controller('ChartWidgetsController', ChartWidgetsController);

    /** @ngInject */
    function ChartWidgetsController()
    {
        var vm = this;

        // Data
        vm.widget1 = {
            title: 'CPU USAGE',
            value: 200,
            chart: {
                columns: [
                    {
                        id    : 'CPU',
                        name  : 'CPU',
                        color : 'white',
                        values: '30,200,100,400,150,250',
                        type  : 'spline'
                    }
                ]
            }
        };

        vm.widget2 = {
            title        : 'STOCK COUNT',
            value        : 5583,
            lastWeekValue: 5583,
            lastWeekDiff : '- 0%',
            chart        : {
                columns: [
                    {
                        id    : 'STOCK',
                        name  : 'STOCK',
                        color : 'purple',
                        values: '30,200,100,400,150,250',
                        type  : 'area'
                    }
                ]
            }
        };

        vm.widget3 = {
            title   : 'IO RATE',
            subtitle: 'Showing last 5 hours',
            chart   : {
                columns: [
                    {
                        id    : 'Input',
                        name  : 'Input',
                        color : 'green',
                        values: '30,75,290,400,150,250',
                        type  : 'spline'
                    },
                    {
                        id    : 'Output',
                        name  : 'Output',
                        color : 'blue',
                        values: '500,300,120,600,50,80',
                        type  : 'spline'
                    }
                ]
            }
        };

        vm.widget4 = {
            title        : 'WEEKLY VISITORS',
            value        : 30342,
            lastWeekValue: 30002,
            lastWeekDiff : '1.12%',
            chart        : {
                columns: [
                    {
                        id    : 'Visitors',
                        name  : 'Visitors',
                        color : 'steelblue',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    }
                ]
            }
        };

        vm.widget5 = {
            title   : 'Google Inc.',
            subtitle: 'NASDAQ: GOOG',
            value   : '531.69',
            diff    : '2.29%',
            chart   : {
                columns: [
                    {
                        id    : 'GOOG',
                        name  : 'GOOG',
                        color : 'white',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    }
                ]
            }
        };

        vm.widget6 = {
            title   : 'MEMORY USAGE',
            subtitle: 'Now',
            text    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus semper lobortis. Etiam sit amet purus in urna malesuada vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae accumsan mi.',
            chart   : {
                columns: [
                    {
                        id    : 'Memory',
                        name  : 'Memory',
                        color : 'orange',
                        values: '30,75,290,400,150,250',
                        type  : 'area-step'
                    }
                ]
            }
        };

        vm.widget7 = {
            title   : 'SALES',
            subtitle: 'Last 30 days',
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
            }
        };

        // Methods

        //////////
    }

})();