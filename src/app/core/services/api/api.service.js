(function ()
{
    'use strict';

    angular.module('app.core')
        .factory('api', apiService)
        .factory('auth', httpApiService)
        .factory('userService', userService)
        .factory('apiResolver', apiResolverService);

    function userService($http,$q,$rootScope){

        var userService = {};
        userService.dataUrl = "http://127.0.0.1:8080/socialNetwork/service/public/index.php/";
        //userService.dataUrl = "http://manageamazon.com/socialNetwork/service/public/index.php/";
        userService.authorization = 'eyJhdXRoIjoiYTJlODRmMzEzMjQ4NmFhZjRjYWRhYmJhMGNkMDExYjkiLCJESVNUUklCVVRFRF9UT0tFTiI6IjU5ZWMzZDU4NDIxYjdmYzJiOWJkZjBkODU4MmQ2MWI0In0';

        userService.getUserProfile = function(username){
            var deferred = $q.defer();
             console.log("getUserProfile METHOD",username);
             var userAuth = localStorage.getItem("authorization");
            var data = JSON.stringify({               
                "data": {
                    "auth": userAuth,
                    "username" : username
                }
            });
            
            $http({
                method: 'POST',
                url: userService.dataUrl + 'member/profile',                
                cache: true,
                data: data                
            }).then(function (response) {                       
                console.log(response);
                return deferred.resolve(response.data);
            });

            return deferred.promise;



        }

        userService.updateProfile = function(information){
            var deferred = $q.defer();
             console.log("updateProfile METHOD",information);
             var userAuth = localStorage.getItem("authorization");
            var data = JSON.stringify({               
                "data": {
                    "auth": userAuth,
                    "info" : information
                }
            });
            
            $http({
                method: 'POST',
                url: userService.dataUrl + 'member/profile-update',                
                cache: true,
                data: data                
            }).then(function (response) {                       
                console.log(response);
                return deferred.resolve(response.data);
            });

            return deferred.promise;



        }
        userService.findMember = function(keyword){
            var deferred = $q.defer();
             console.log("findMember METHOD",keyword);
             var userAuth = localStorage.getItem("authorization");
            var data = JSON.stringify({               
                "data": {
                    "auth": userAuth,
                    "keyword" : keyword
                }
            });            
            $http({
                method: 'POST',
                url: userService.dataUrl + 'member/find',                
                cache: true,
                data: data                
            }).then(function (response) {                       
                console.log(response);
                return deferred.resolve(response.data);
            });

            return deferred.promise;
        }

        userService.addFamilyMember = function(member){
            var deferred = $q.defer();
             console.log("findMember METHOD");
             var userAuth = localStorage.getItem("authorization");
            var data = JSON.stringify({               
                "data": {
                    "auth": userAuth,
                    "member" : member
                }
            });            
            $http({
                method: 'POST',
                url: userService.dataUrl + 'member/addtofamily',                
                cache: true,
                data: data                
            }).then(function (response) {                       
                console.log(response);
                return deferred.resolve(response.data);
            });

            return deferred.promise;
        }

        userService.getFamilyMembers = function(){
            var deferred = $q.defer();
            console.log("getFamilyMembers METHOD");
            var userAuth = localStorage.getItem("authorization");
            var data = JSON.stringify({               
                "data": {
                    "auth": userAuth
                }
            });            
            $http({
                method: 'POST',
                url: userService.dataUrl + 'member/list',                
                cache: true,
                data: data                
            }).then(function (response) {                       
                console.log(response);
                return deferred.resolve(response.data);
            });

            return deferred.promise;
        }
        return userService;

    }

    function httpApiService($http,$q,$location,$rootScope){
        var auth = {};
        //auth.dataUrl = "http://manageamazon.com/socialNetwork/service/public/index.php/";
        auth.dataUrl = "http://127.0.0.1:8080/socialNetwork/service/public/index.php/";
        auth.authorization = 'eyJhdXRoIjoiYTJlODRmMzEzMjQ4NmFhZjRjYWRhYmJhMGNkMDExYjkiLCJESVNUUklCVVRFRF9UT0tFTiI6IjU5ZWMzZDU4NDIxYjdmYzJiOWJkZjBkODU4MmQ2MWI0In0';

        auth.login = function(user,pass){
            var deferred = $q.defer();
            console.log("LOGIN METHOD");

            var data = JSON.stringify({               
                "data": {
                    "username": user,
                    "password": pass
                }
            });

            console.info(data);
            $http({
                method: 'POST',
                url: auth.dataUrl + 'auth/login',
                headers: {
                    //'Allow-Control-Allow-Origin' : '*',
                    //'Authorization': auth.authorization
                },
                cache: true,
                data: data
                
            }).then(function (response) {                       
                console.log(response);
                return deferred.resolve(response.data);
            });
            return deferred.promise;
        }

        auth.getUserData = function(userAuth){
            var deferred = $q.defer();
            console.log("LOGIN METHOD",userAuth);

            var data = JSON.stringify({               
                "data": {
                    "auth": userAuth
                }
            });
            
            $http({
                method: 'POST',
                url: auth.dataUrl + 'auth/userdata',                
                cache: true,
                data: data                
            }).then(function (response) {                       
                console.log(response);
                return deferred.resolve(response.data);
            });

            return deferred.promise;
        }

        auth.logout = function(){
            var deferred = $q.defer();
            console.log("logout METHOD");
            var userAuth = localStorage.getItem("authorization");
            var data = JSON.stringify({               
                "data": {
                    "auth": userAuth
                }
            });
            
            $http({
                method: 'POST',
                url: auth.dataUrl + 'auth/logout',                
                cache: true,
                data: data                
            }).then(function (response) {                       
                console.log(response);
                if(response.status){
                    localStorage.removeItem("authorization");
                    $rootScope.userData = null;
                    $location.path("/auth/login");
                }
                //return;
                return deferred.resolve(response.status);
            });

            return deferred.promise;
        }

        auth.register = function(userData){
            var deferred = $q.defer();
            console.log("register METHOD");
            
            var data = JSON.stringify({               
                "data": userData
            });
            
            $http({
                method: 'POST',
                url: auth.dataUrl + 'auth/register',                
                cache: true,
                data: data                
            }).then(function (response) {                       
                console.log(response);                
                return deferred.resolve(response.data);
            });

            return deferred.promise;
        }

        return auth;
    }

    /** @ngInject */
    function apiService($resource)
    {
        var api = {};
        api.dataUrl = 'app/core/services/api/data/';

        api.activities = $resource(api.dataUrl + 'notifications/activities.json', null, {
            'get': {method: 'get'}
        });

        api.cards = $resource(api.dataUrl + 'cards/cards.json', null, {
            'get': {method: 'get'}
        });

        api.contacts = $resource(api.dataUrl + 'notifications/contacts.json', null, {
            'get': {method: 'get'}
        });

        api.events = $resource(api.dataUrl + 'notifications/events.json', null, {
            'get': {method: 'get'}
        });

        api.fileManager = {
            documents: $resource(api.dataUrl + 'file-manager/documents.json', null, {
                'get': {method: 'get'}
            })
        };

        api.icons = $resource('assets/icons/selection.json', null, {
            'get': {method: 'get'}
        });

        api.invoice = $resource(api.dataUrl + 'invoice/invoice.json', null, {
            'get': {method: 'get'}
        });

        api.mail = {
            inbox: $resource(api.dataUrl + 'mail/inbox.json', null, {
                'get': {method: 'get'}
            })
        };

        api.notes = $resource(api.dataUrl + 'notifications/notes.json', null, {
            'get': {method: 'get'}
        });

        api.profile = {
            timeline    : $resource(api.dataUrl + 'profile/timeline.json', null, {
                'get': {method: 'get'}
            }),
            about       : $resource(api.dataUrl + 'profile/about.json', null, {
                'get': {method: 'get'}
            }),
            photosVideos: $resource(api.dataUrl + 'profile/photos-videos.json', null, {
                'get': {method: 'get'}
            })
        };

        api.search = {
            classic : $resource(api.dataUrl + 'search/classic.json', null, {
                'get': {method: 'get'}
            }),
            mails   : $resource(api.dataUrl + 'search/mails.json', null, {
                'get': {method: 'get'}
            }),
            users   : $resource(api.dataUrl + 'search/users.json', null, {
                'get': {method: 'get'}
            }),
            contacts: $resource(api.dataUrl + 'search/contacts.json', null, {
                'get': {method: 'get'}
            })
        };

        api.tables = {
            employees   : $resource(api.dataUrl + 'tables/employees.json', null, {
                'get': {method: 'get'}
            }),
            employees100: $resource(api.dataUrl + 'tables/employees100.json', null, {
                'get': {method: 'get'}
            })
        };

        api.timeline = $resource(api.dataUrl + 'timeline/timeline.json', null, {
            'get': {method: 'get'}
        });

        api.todo = {
            tasks: $resource(api.dataUrl + 'todo/tasks.json', null, {
                'get': {method: 'get'}
            }),
            tags : $resource(api.dataUrl + 'todo/tags.json', null, {
                'get': {method: 'get'}
            })
        };

        return api;
    }

    /** @ngInject */
    function apiResolverService($q, api)
    {
        var service = {
            resolve: resolve
        };

        return service;

        //////////
        /**
         * Resolve api
         * @param action
         * @param parameters
         */
        function resolve(action, parameters)
        {
            var actionParts = action.split('@'),
                resource = actionParts[0],
                method = actionParts[1],
                params = parameters || {};

            if ( !resource || !method )
            {
                console.error('apiResolver.resolve requires correct action parameter (ResourceName@methodName)');
                return false;
            }

            // Create a new deferred object
            var deferred = $q.defer();

            // Get the correct api object from api service
            var apiObject = getApiObject(resource);

            if ( !apiObject )
            {
                console.error('Resource "' + resource + '" is not defined in the api service!');
                deferred.reject('Resource "' + resource + '" is not defined in the api service!');
            }
            else
            {
                apiObject[method](params,

                    // Success
                    function (response)
                    {
                        deferred.resolve(response);
                    },

                    // Error
                    function (response)
                    {
                        deferred.reject(response);
                    }
                );
            }

            // Return the promise
            return deferred.promise;
        }

        /**
         * Get correct api object
         *
         * @param resource
         * @returns {*}
         */
        function getApiObject(resource)
        {
            // Split the resource in case if we have a dot notated object
            var resourceParts = resource.split('.'),
                apiObject = api;

            // Loop through the resource parts and go all the way through
            // the api object and return the correct one
            for ( var l = 0; l < resourceParts.length; l++ )
            {
                if ( angular.isUndefined(apiObject[resourceParts[l]]) )
                {
                    console.error('Resource part "' + resourceParts[l] + '" is not defined!');
                    apiObject = false;
                    break;
                }

                apiObject = apiObject[resourceParts[l]];
            }

            if ( !apiObject )
            {
                return false;
            }

            return apiObject;
        }
    }

})();