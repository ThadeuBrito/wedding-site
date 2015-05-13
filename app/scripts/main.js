'use strict';

console.log('\'Allo \'Allo!');

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-62944375-1', 'auto');
ga('send', 'pageview');

// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '1437399506573620',
//     xfbml      : true,
//     version    : 'v2.3'
//   });
// };
//
// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(document, 'script', 'facebook-jssdk'));


// $('.months').countdown('2015/7/4', function(event) {
//   $(this).html(event.strftime('%m'));
//   $('.count-down > .content > .title').html(event.strftime('%m meses %D days %H:%M:%S'));
// });

$('.days').countdown('2015/07/04', function(event) {
  $(this).html(event.strftime('%D'));
});

$('.hours').countdown('2015/07/04', function(event) {
  $(this).html(event.strftime('%H'));
});

$('.minutes').countdown('2015/07/04', function(event) {
  $(this).html(event.strftime('%M'));
});

$('.seconds').countdown('2015/07/04', function(event) {
  $(this).html(event.strftime('%S'));
});


function initialize() {
  var myLatlng = new google.maps.LatLng(-2.501713, -44.237152);
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: myLatlng
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

var playing = true;
$('.icon-play').hide();

$('.music-play').click(function() {
  if (playing) {
    $('#player').trigger('pause');
    playing = false;
    $('.icon-play').show();
    $('.icon-pause').hide();
  } else {
    $('#player').trigger('play');
    playing = true;
    $('.icon-play').hide();
    $('.icon-pause').show();
  }
});
