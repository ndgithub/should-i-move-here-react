function initMap() {
  var myLatLng = { lat: 30.2672, lng: -97.7431 };

  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 11
  });

  // Create a marker and set its position..
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    // draggable: true,
    // title: "Welcome to SIMTO!",
    icon:
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });
  // to serarch for the location
  var searchBox1 = new google.maps.places.SearchBox(
    document.getElementById('city-input1')
  );

  var searchBox2 = new google.maps.places.SearchBox(
    document.getElementById('city-input2')
  );

  // to change event on search box
  google.maps.event.addListener(
    searchBox1,
    'places_changed',
    handleSearchBoxChangesGenerator(searchBox1)
  );
  google.maps.event.addListener(
    searchBox2,
    'places_changed',
    handleSearchBoxChangesGenerator(searchBox2)
  );

  function handleSearchBoxChangesGenerator(searchBox) {
    return function() {
      handleSearchBoxChange(searchBox);
    };
  }

  function handleSearchBoxChange(searchBox) {
    $('.mainPage').css('display', 'block');
    $('.landingPage').css('display', 'none');
    $('.modal').css('display', 'none'); //Hide modal if user makes a search

    $('#main-content').css('display', 'none');
    var places = searchBox.getPlaces();
    console.log(places.length);
    //Display error message if there are no places found

    if (places.length < 1) {
      $('.modal').css('display', 'block');
      $('.overlay').css('height', '100vh');
      $('.dismiss').on('click', function() {
        $('.modal').css('display', 'none');
      });
    } else {
      $('#main-content').css('display', 'block');
      $('.overlay').css('height', '100%');
    }
    //bound
    var bounds = new google.maps.LatLngBounds();
    var i, place;
    console.log(place);
    for (i = 0; (place = places[i]); i++) {
      bounds.extend(place.geometry.location);
      //set marker postion new....
      marker.setPosition(place.geometry.location);
      // Latitude
      var lat1 = places[i].geometry.location.lat();
      console.log(lat1);
      //Longitude
      var lng1 = places[i].geometry.location.lng();
      console.log(lng1);
      var cityName = places[i].name;
      $('.city').text(cityName);
      //info window
      var contentString =
        '<div id="content">' +
        '<h6>Latitude =' +
        lat1 +
        '</h6><br>' +
        '<h6>Longitude  =' +
        lng1 +
        '</h6>' +
        '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      // Add the circle for this city to the map.
      // var cityCircle = new google.maps.Circle({
      //   strokeColor: "#FF0000",
      //   strokeOpacity: 0.8,
      //   strokeWeight: 2,
      //   fillColor: "#FF0000",
      //   fillOpacity: 0.35,
      //   map: map,
      //   center: { lat: lat1, lng: lng1 },
      //   radius: Math.sqrt(100000000)
      // });
      // console.log("cityCircle =   " + cityCircle);

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
      zomatoCall(cityName);
      weatherCall(lat1, lng1);
      breweryCall(cityName);
    }
    //fit to the bound
    map.fitBounds(bounds);
    // set zoom
    map.setZoom(11);
  }
}
