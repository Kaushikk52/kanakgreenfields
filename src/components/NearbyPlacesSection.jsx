import { useEffect, useRef } from "react";

const nearbySpots = [
  { name: "Sunset Point", lat: 29.127, lng: 79.459 },
  { name: "Hilltop Café", lat: 29.121, lng: 79.453 },
  { name: "Nature Trail", lat: 29.119, lng: 79.457 },
];

const centerLocation = { lat: 29.123, lng: 79.456 }; // Replace with actual Aranyam Greens lat/lng

export default function NearbyPlacesSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: centerLocation,
      zoom: 14,
    });

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
        content: `<strong>${spot.name}</strong>`,
      });

      marker.addListener("click", () => infoWindow.open(map, marker));
    });
  }, []);

  return (
    <section className="w-full h-screen bg-white py-10 relative">
      <h1 className="heading font-bold mb-6 px-4 mx-20">
        Nearby <br /> Locations
      </h1>
      <div ref={mapRef} className="w-[90%] h-[80%] mx-auto rounded-xl shadow-lg" />
    </section>
  );
}
