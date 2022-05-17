// Initialize and add the map
function initMap(){
  // The location of Uluru
  const loc = { lat: 34.200039, lng: 72.039978 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.querySelector('.map'),
    {
      zoom: 14,
      center: loc,
    }
  );

  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}

$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
      scrollTop: $(hash).offset().top - 100
    }, 800
    );
  } 
});