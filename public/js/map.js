
document.addEventListener("DOMContentLoaded", () => {

  if (!document.getElementById("map")) return;

  mapboxgl.accessToken = window.mapToken;

  const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: window.listing.geometry.coordinates,
    zoom: 9,
  });

  new mapboxgl.Marker({ color: 'red' })
    .setLngLat(window.listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h4>${window.listing.location}</h4><p>Exact location will be provided after booking</p>`)
    )
    .addTo(map);

});
