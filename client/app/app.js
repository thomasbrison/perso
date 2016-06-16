'use strict';

angular.module('contactsApp', ['contactsApp.auth', 'contactsApp.admin', 'contactsApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
