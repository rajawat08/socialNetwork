(function ()
{
    'use strict';

    angular.module('app.core')
        .directive('msResponsiveTable', msResponsiveTableDirective);

    /** @ngInject */
    function msResponsiveTableDirective()
    {
        return {
            restrict  : 'A',
            transclude: 'element',
            compile   : function (tElement)
            {
                var wrapper = angular.element('<div class="ms-responsive-table-wrapper"></div>');
                tElement.after(wrapper);

                return function postLink(scope, iElement, iAttrs, ctrl, transcludeFn)
                {
                    // Custom transclusion
                    transcludeFn(function (clone)
                    {
                        wrapper.append(clone);
                    });

                    //////////
                };
            }
        };
    }
})();