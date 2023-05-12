import { useRef, useEffect } from "react";

function Map({ locations }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);

        mapboxgl.accessToken = import.meta.env.VITE_MAP_API;
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v12",
          zoom: 7,
          center: locations[0].coordinates,
          attributionControl: false,
        });

        map.on("load", function () {
          // Loop through the locations and add a marker and popup for each location
          locations.forEach(({ coordinates, description, day }) => {
            const el = document.createElement("div");
            el.className = "marker";
            el.style.backgroundColor = "blue";
            el.style.border = "2px solid white";
            el.style.borderRadius = "50%";
            el.style.width = "15px";
            el.style.height = "15px";

            const pointsPopup = new mapboxgl.Popup({
              offset: 10,
              closeButton: false,
              closeOnClick: false,
            }).setHTML(`<div class='popup-cont'>
                <h3 class='point'>Day : ${day}</h3>
                <p class='popup-content'>${description}</p>
              </div>`);

            // Add a marker with the popup to the map for each location
            new mapboxgl.Marker({ element: el })
              .setLngLat(coordinates)
              .setPopup(pointsPopup)
              .addTo(map);
          });

          const wayPoints = locations.map((each) => each.coordinates);

          function drawPath(waypoints) {
            // Create a GeoJSON feature collection from the waypoints
            var points = turf.points(waypoints);

            // Use the Turf.js "lineString" function to create a LineString feature
            var line = turf.lineString(waypoints);

            // Add the LineString feature to the map
            map.addSource("route", {
              type: "geojson",
              data: line,
            });

            // Add a layer to the map to display the LineString feature
            map.addLayer({
              id: "route",
              type: "line",
              source: "route",
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "#888",
                "line-width": 8,
              },
            });

            // Fit the map to the bounds of the LineString feature
            map.fitBounds(turf.bbox(line), {
              padding: 50,
            });
          }

          // Call the "drawPath" function with the waypoints
          drawPath(wayPoints);
        });
      }
    }, { threshold: 0.5 });

    if (mapContainer.current) {
      observer.observe(mapContainer.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [locations]);

  return (
    <div
      className="map w-[95%] h-[400px] md:w-[90%] md:h-[600px]"
      id="map"
      ref={mapContainer}
    />
  );
}

export default Map;
