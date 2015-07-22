+function ($) {
  'use strict';
  var map;
  var thornhill = new google.maps.LatLng(-37.7959016, 144.6258284);
  var image = '/cms/wp-content/themes/thornhill/library/assets/images/marker.png';
  function initialize() {

    var thornhillStyles = [
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { color: '#dad4c8' }
        ]
      },{
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          { color : '#4dc2c2' }
        ]
      }
    ];

    var mapOptions = {
      zoom: 11,
      center: thornhill,
      disableDefaultUI: true
    };

    map = new google.maps.Map(document.getElementById('myMap'),
        mapOptions);

    var styledMapOptions = {
      name: 'Thornhill Map'
    };

    var roadMapType = new google.maps.StyledMapType(
        thornhillStyles, styledMapOptions);

    map.mapTypes.set('roadatlas', roadMapType);
    map.setMapTypeId('roadatlas');

    var marker = new google.maps.Marker({
      position: thornhill,
      map: map,
      title: 'Thornhill Park',
      icon: image,
      animation: google.maps.Animation.BOUNCE
    });

  }

  google.maps.event.addDomListener(window, 'load', initialize);

}(jQuery);
