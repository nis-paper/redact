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
        fintext +="  " + this + "\n";
        });
        
    var short = fintext.substr(0, 100) + "...";
        $scope.news.$add({
            header: $scope.headerText,
            short: short,
            text: fintext,
            redactor: email,
            date: Date.now()
        });
        fintext = '';
    };
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
       $('.modal').modal();
    //you also get the actual event object
    //do stuff, execute functions -- whatever...
});
});



