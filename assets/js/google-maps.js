function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 45.4080522, lng: 11.8943275};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Department of Information Engineering, Padua' // Title Location
    });
}