const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const reportLog = document.getElementById('reportLog');
const write = document.getElementById('write');
const login = document.getElementById('login');
      
btnLogin.addEventListener('click', e => {
    const txtemail = email.value;
    const txtpassword = password.value;
    const promise = firebase.auth().signInWithEmailAndPassword(txtemail, txtpassword);
});




      // Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
         
          if(firebaseUser){
            //Change UI
          write.classList.remove('hide');
          login.classList.add('hide');
          console.log(firebaseUser);
             }
          else{
          login.classList.remove('hide');
          write.classList.add('hide');
          }
      });
      


const header = document.getElementById('header');
const short = document.getElementById('short');
const text = document.getElementById('text');


var app = angular.module('NewsApp', ['firebase'])
 .directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true || scope.$first === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});



app.controller('NewsController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('news');
    $scope.news = $firebaseArray(ref);
    $scope.send = function() {
    var user = firebase.auth().currentUser;
    var email = user.email;
    var fintext = " ";
    
        var lines = $('#text').val().split('\n');
        $.each(lines, function(){
        fintext +="<p>" + this + "</p>";
        });
        
        $scope.news.$add({
            header: $scope.headerText,
            text: fintext,
            redactor: email,
            date: Date.now()
        });
        fintext = '';
    };
    
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
       $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .9, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 300, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      
        console.log(modal, trigger);
      },
      complete: function() { } // Callback for Modal close
    });
    //you also get the actual event object
    //do stuff, execute functions -- whatever...
});
});

  app.filter('trustAsHtml',['$sce', function($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }]);



