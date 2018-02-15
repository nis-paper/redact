(function() {
  'use strict';

  angular
    .module('config', [])
    .constant("chatConfig", {
      firebaseUrl: 'https://blog-sngular.firebaseio.com/'
    });

})();