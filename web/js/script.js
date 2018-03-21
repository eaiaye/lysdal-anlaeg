function myMap() {
    var myLatLng = {lat: 56.177559, lng: 9.554179};
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myLatLng,
        zoom: 15
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Lysdal Anlæg, Borgergade 1, 8600 Silkeborg'
    });
}