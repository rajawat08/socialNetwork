(function ()
{
    'use strict';

    var fuseThemes = {
        'default'  : {
            primary   : {
                name: 'fuse-pale-blue',
                hues: {
                    'default': '500',
                    'hue-1'  : '400',
                    'hue-2'  : '700',
                    'hue-3'  : 'A100'
                }
            },
            accent    : {
                name: 'light-blue',
                hues: {
                    'default': '600',
                    'hue-1'  : '400',
                    'hue-2'  : '600',
                    'hue-3'  : 'A700'
                }
            },
            warn      : {name: 'red'},
            background: {
                name: 'grey',
                hues: {
                    'default': 'A100',
                    'hue-1'  : '100',
                    'hue-2'  : '50',
                    'hue-3'  : '300'
                }
            }
        },
        'indigo'   : {
            primary   : {
                name: 'indigo'
            },
            accent    : {name: 'pink'},
            warn      : {name: 'blue'},
            background: {
                name: 'grey',
                hues: {
                    'default': 'A100',
                    'hue-1'  : '100',
                    'hue-2'  : '50',
                    'hue-3'  : '300'
                }
            }
        },
        'blue-grey': {
            primary   : {name: 'blue-grey'},
            accent    : {name: 'teal',
                hues: {
                    'default': '700',
                    'hue-1'  : '400',
                    'hue-2'  : '800',
                    'hue-3'  : '300'
                }},
            warn      : {name: 'blue'},
            background: {name: 'grey'}
        }
    };

    angular
        .module('app.core')
        .constant('fuseThemes', fuseThemes);
})();