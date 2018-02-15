(function(){
  'use strict';

  angular
    .module('chat')
    .controller('HomeController', controller);

  function controller( $scope, chatConfig) {
    console.log(chatConfig);
    $scope.url = chatConfig.firebaseUrl;
  }

})();