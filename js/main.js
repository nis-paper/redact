jQuery(document).ready(function($){
	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav(true);
	});
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function(event){
		event.preventDefault();
		toggleNav(false);
	});
	//select a new section
	$('.cd-nav li').on('click', function(event){
		event.preventDefault();
		var target = $(this),
			//detect which section user has chosen
			sectionTarget = target.data('menu');
		if( !target.hasClass('cd-selected') ) {
			//if user has selected a section different from the one alredy visible
			//update the navigation -> assign the .cd-selected class to the selected item
			target.addClass('cd-selected').siblings('.cd-selected').removeClass('cd-selected');
			//load the new section
			loadNewContent(sectionTarget);
		} else {
			// otherwise close navigation
			toggleNav(false);
		}
	});

	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
	}
    var index = 0;
	function loadNewContent(newSection) {
        index = index + 1;
		//create a new section element and insert it into the DOM
		var section = $('<section class="cd-section '+newSection+'"></section>').appendTo($('main'));
		//load the new content from the proper html file
		section.load(newSection+'.html .cd-section > *', function(event){
              if (newSection != "index" & index == 1)
            {
              content == cdcontent[0].innerHTML;
            };
              if (newSection == "index")
            {
              cdcontent[1].innerHTML  =  content;
            };
			//add the .cd-selected to the new section element -> it will cover the old one
			section.addClass('cd-selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//close navigation
				toggleNav(false);
			});
			section.prev('.cd-selected').removeClass('cd-selected');
		});

		$('main').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//once the navigation is closed, remove the old section from the DOM
			section.prev('.cd-section').remove();
		});

		if( $('.no-csstransitions').length > 0 ) {
			//if browser doesn't support transitions - don't wait but close navigation and remove old item
			toggleNav(false);
			section.prev('.cd-section').remove();
		}
	}
});

const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const reportLog = document.getElementById('reportLog');

      
      // Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
         
          if(firebaseUser){
            //Change UI
      
          console.log(firebaseUser);
             }
          else{
        
          }
      });
      


const header = document.getElementById('header');
const short = document.getElementById('short');
const text = document.getElementById('text');


var app = angular.module('NewsApp', ['firebase']);
app.controller('NewsController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('news');
    $scope.news = $firebaseArray(ref);
    $scope.send = function() {
    var user = firebase.auth().currentUser;
    var email = user.email;
        $scope.news.$add({
            header: $scope.headerText,
            short: $scope.shortText,
            text: $scope.Text,
            redactor: email
        });

    }

});







