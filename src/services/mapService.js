const mockGeojson = [
  {
    name: 'Daria Andru',
    age: 26,
    mood: 'Romantic',
    poked: true,
    show_image_on_map: false,
    coordinates: [10.042697, 53.607430]
  },
  {
    name: 'Adela Alvarez',
    age: 23,
    mood: 'Humorous',
    poked: true,
    show_image_on_map: true,
    coordinates: [10.046202, 53.605580]
  },
  {
    name: 'Maria',
    age: 24,
    mood: 'Lonely',
    show_image_on_map: false,
    coordinates: [10.028646, 53.600795]
  }
]

export const initiateMap = (mapBoxToken) => {
  window.mapboxgl.accessToken = mapBoxToken
  const mapInstance = new window.mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [10.040769, 53.605676],
    zoom: 12,
    maxZoom: 15
  })

  return mapInstance
}

export const renderMarkers = (mapInstance, onMarkerClick) => {
  // Add markers to the map.
  for (const marker of mockGeojson) {
    // Create a DOM element for each marker.
    const el = document.createElement('div')
    let markerInstance
    // const width = marker.properties.iconSize[0]
    // const height = marker.properties.iconSize[1]
    el.className = 'marker'
    const index = Math.floor(Math.random() * 2) + 1
    const gender = ['m', 'f'].sort(() => Math.random() > 0.5)[0]
    el.style.backgroundImage = `url(
      ${marker.show_image_on_map ? 'img/babe.png': `img/bitmojis/${gender}-${index}.png`}
    )`
    el.style.backgroundSize = '100%'

    el.addEventListener('click', () => {
      markerInstance.togglePopup()
      onMarkerClick(marker)
    })

    if (marker.poked) {
      el.innerHTML = `
        <img class="poke w32 h32 pos-abs left20 top-27 br50p pointer z9" src="img/poke.png">
      `
    }
    // Add markers to the map.
    markerInstance = new window.mapboxgl.Marker(el)
      .setLngLat(marker.coordinates)
      .setPopup(new window.mapboxgl.Popup({ offset: 30, closeButton: false, closeOnClick: false, anchor: marker.poked ? 'top' : 'bottom' }).setHTML(`
        <span class="fw-bold f16">${marker.name}, ${marker.age}</span>
      `))
      .addTo(mapInstance)

    const markerDiv = markerInstance.getElement()
    markerDiv.addEventListener('mouseenter', () => markerInstance.togglePopup())
    markerDiv.addEventListener('mouseleave', () => markerInstance.togglePopup())
  }
}
