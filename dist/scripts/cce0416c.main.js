"use strict";function initialize(){{var a=new google.maps.LatLng(-2.501713,-44.237152),b={zoom:15,scrollwheel:!1,center:a},c=new google.maps.Map(document.getElementById("map-canvas"),b);new google.maps.Marker({position:a,map:c,title:"Hello World!"})}}console.log("'Allo 'Allo!"),$(".days").countdown("2015/07/04",function(a){$(this).html(a.strftime("%D"))}),$(".hours").countdown("2015/07/04",function(a){$(this).html(a.strftime("%H"))}),$(".minutes").countdown("2015/07/04",function(a){$(this).html(a.strftime("%M"))}),$(".seconds").countdown("2015/07/04",function(a){$(this).html(a.strftime("%S"))}),google.maps.event.addDomListener(window,"load",initialize);