(function ()
{
    'use strict';

    angular.module('app.pages.search')
        .controller('SearchController', SearchController);

    /** @ngInject */
    function SearchController(Classic, Mails, Users, Contacts)
    {
        var vm = this;

        // Data
        vm.colors = ['md-blue-bg', 'md-blue-grey-bg', 'md-orange-bg', 'md-pink-bg', 'md-purple-bg'];

        vm.classic = Classic.data;
        vm.mails = Mails.data;
        vm.users = Users.data;
        vm.contacts = Contacts.data;

        // Methods

        //////////
    }

})();