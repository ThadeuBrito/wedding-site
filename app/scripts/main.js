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
