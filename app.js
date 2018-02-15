(function() {
  'use strict';

  angular
    .module('chat', ['firebase', 'ui.router', 'config'])
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/modules/home/home.html',
        controller: 'HomeController'
      });

      /*
        ADD HERE NEW STATES
      */

    $urlRouterProvider.otherwise('/');
  };

})();