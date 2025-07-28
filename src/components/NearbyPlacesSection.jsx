import { useEffect, useRef } from "react";


const centerLocation = { lat: 29.475067, lng: 79.609309 }; // Aranyam Greens

const nearbySpots = [
  { name: "That Golu Devta Mandir (Bell Temple)", distance: "140 km", lat: 29.65, lng: 79.61 },
  { name: "Jim Corbett National Park", distance: "112 km", lat: 29.5486, lng: 78.9353 },
  { name: "Kapileshwar Mahadev Temple", distance: "19.5 km", lat: 29.57, lng: 79.70 },
  { name: "Dhokaney Waterfall", distance: "26.7 km", lat: 29.60, lng: 79.60 },
  { name: "Mukteshwar Dham / Zero Point", distance: "15 km", lat: 29.50, lng: 79.57 },
  { name: "Doll Ashram Kanna", distance: "26.7 km", lat: 29.49, lng: 79.65 },
  { name: "Morning View Point", distance: "19 km", lat: 29.48, lng: 79.67 },
  { name: "Bandar Tekri", distance: "16.5 km", lat: 29.45, lng: 79.61 },
  { name: "Tagore Top View Point", distance: "21.3 km", lat: 29.43, lng: 79.59 },
  { name: "Bhim Tal Lake", distance: "41 km", lat: 29.38, lng: 79.58 },
  { name: "Chhota Kailash Trekking Point", distance: "61 km", lat: 29.30, lng: 79.55 },
  { name: "Nainital Lake", distance: "43 km", lat: 29.38, lng: 79.46 },
  { name: "Kainchi Dham Temple", distance: "26 km", lat: 29.40, lng: 79.47 },
  { name: "Tiffin Top View Point", distance: "45 km", lat: 29.38, lng: 79.49 },
  { name: "Snow View Point – Nainital", distance: "45.6 km", lat: 29.38, lng: 79.47 },
];


export default function NearbyPlacesSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: centerLocation,
      zoom: 12,
    });

    // Central marker
    new window.google.maps.Marker({
      position: centerLocation,
      map,
      title: "Aranyam Greens",
      icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    });

    nearbySpots.forEach((spot) => {
      const marker = new window.google.maps.Marker({
        position: { lat: spot.lat, lng: spot.lng },
        map,
        title: spot.name,
        icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `<strong>${spot.name}</strong><br /><em>${spot.distance} away</em>`,
      });

      marker.addListener("click", () => infoWindow.open(map, marker));
    });
  }, []);

  return (
    <section className="w-full h-screen bg-white py-10 relative">
      <h1 className="heading font-bold mb-6 px-4 mx-20">Nearby <br /> Locations</h1>
      <div
        ref={mapRef}
        className="w-[90%] h-[80%] mx-auto rounded-xl shadow-lg"
      />
    </section>
  );
}
