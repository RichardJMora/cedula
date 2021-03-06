'use strict';

// Declare app level module which depends on views, and components
angular.module('cedulaApi', [
  'ngRoute',
  'cedulaApi.home',
  'cedulaApi.creditos',
  'cedulaApi.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/inicio'});
}]);
