mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox studio
    style: "mapbox://styles/mapbox/streets-v12", //style URL
    center: listing.geometry.coordinates, //starting position [lng,lat]
    zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates) // listing.geometry.coordinates
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h6>${listing.title}Exact location provided after booking!</h6>`
      )
    )
    .addTo(map);