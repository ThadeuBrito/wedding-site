console.log('\'Allo \'Allo!');

$('.months').countdown('2015/07/04', function(event) {
  $(this).html(event.strftime('%m'));
});

$('.days').countdown('2015/07/04', function(event) {
  $(this).html(event.strftime('%d'));
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
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
