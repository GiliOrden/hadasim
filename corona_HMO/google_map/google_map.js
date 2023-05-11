var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.08, lng: 34.877 },
    zoom: 11,
  });
}
function searchLocation() {
  var location = document.getElementById("location").value;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: location }, function (results, status) {
    if (status == "OK") {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
function createIsolation() {
  var location = document.getElementById("location").value;
  var date = document.getElementById("date").value;
  if (!location || !date) {
    alert("No Date/location selected, please try again");
  } else {
    // Send request to server with location and date
    alert("Creating isolation for " + location + " on " + date);
  }
}
