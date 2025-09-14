import { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const centerLocation = { lat: 29.475067, lng: 79.609309 }; // Aranyam Greens

const nearbySpots = [
    {
        name: "That Golu Devta Mandir (Bell Temple)",
        distance: "140 km",
        lat: 29.65,
        lng: 79.61,
    },
    {
        name: "Jim Corbett National Park",
        distance: "112 km",
        lat: 29.5486,
        lng: 78.9353,
    },
    {
        name: "Kapileshwar Mahadev Temple",
        distance: "19.5 km",
        lat: 29.57,
        lng: 79.7,
    },
    { name: "Dhokaney Waterfall", distance: "26.7 km", lat: 29.6, lng: 79.6 },
    {
        name: "Mukteshwar Dham / Zero Point",
        distance: "15 km",
        lat: 29.5,
        lng: 79.57,
    },
    { name: "Doll Ashram Kanna", distance: "26.7 km", lat: 29.49, lng: 79.65 },
    { name: "Morning View Point", distance: "19 km", lat: 29.48, lng: 79.67 },
    { name: "Bandar Tekri", distance: "16.5 km", lat: 29.45, lng: 79.61 },
    {
        name: "Tagore Top View Point",
        distance: "21.3 km",
        lat: 29.43,
        lng: 79.59,
    },
    { name: "Bhim Tal Lake", distance: "41 km", lat: 29.38, lng: 79.58 },
    {
        name: "Chhota Kailash Trekking Point",
        distance: "61 km",
        lat: 29.3,
        lng: 79.55,
    },
    { name: "Nainital Lake", distance: "43 km", lat: 29.38, lng: 79.46 },
    { name: "Kainchi Dham Temple", distance: "26 km", lat: 29.4, lng: 79.47 },
    {
        name: "Tiffin Top View Point",
        distance: "45 km",
        lat: 29.38,
        lng: 79.49,
    },
    {
        name: "Snow View Point – Nainital",
        distance: "45.6 km",
        lat: 29.38,
        lng: 79.47,
    },
];

const places = [
  {
    name: "Almora",
    distance: "38 km",
    desc:
      "Perched on a crescent-shaped ridge in Uttarakhand, Almora is a cultural jewel wrapped in pine-scented air. Cobbled lanes, panoramic Himalayan views, and a rich history make this heritage town a perfect blend of nature and nostalgia.",
  },
  {
    name: "Bhimtal",
    distance: "42 km",
    desc:
      "Nestled amidst emerald hills, Bhimtal offers a quieter alternative to its bustling cousin. The lake, dotted with an island at its heart, mirrors the tranquility of the surrounding pines and creates a perfect retreat for those seeking calm and clarity.",
  },
  {
    name: "Bhowali",
    distance: "32 km",
    desc:
      "Cradled between tall hills, Bhowali is the quiet gateway to the Kumaon region. Known for its orchards and crisp mountain air, this little town is where journeys pause, breathe, and begin anew.",
  },
  {
    name: "Jageshwar",
    distance: "72 km",
    desc:
      "Encircled by ancient deodar forests, Jageshwar is a mystical temple town where time seems to pause. With over a hundred stone temples echoing with centuries of devotion, it’s a place where the sacred and the scenic merge seamlessly.",
  },
  {
    name: "Kainchi Dham",
    distance: "26 km",
    desc:
      "Hidden in a quiet bend of the hills, Kainchi Dham is a spiritual haven blessed with serenity. Known for the ashram established by Neem Karoli Baba, this sacred spot is steeped in silence, drawing seekers from across the world into its peaceful fold.",
  },
  {
    name: "Mukteshwar",
    distance: "15 km",
    desc:
      "High above the valley floor, Mukteshwar is a picture of peace and poetry. With views of snow-capped peaks, dense oak forests, and a charming temple perched on a cliff, it’s a place where nature whispers in every breeze.",
  },
  {
    name: "Nainital",
    distance: "45 km",
    desc:
      "Tucked in the lap of Uttarakhand’s majestic mountains is a hill town famed for its shimmering lake, colonial charm, and panoramic views. Nainital draws you in with its peaceful boat rides, winding forest trails, and the timeless beauty of the Naini Lake reflecting the hills above.",
  },
  {
    name: "Seetla",
    distance: "9 km",
    desc:
      "Wrapped in calm and cool breezes, Seetla is a lesser-known gem near Mukteshwar. Dotted with small farms, scenic trails, and sleepy homesteads, it’s perfect for slow days and soul-deep rest.",
  },
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

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const renderCard = (place, index) => (
        <div
            key={index}
            className="bg-[#f7f7f7] p-4 rounded-lg shadow hover:shadow-md transition"
        >
            <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => handleToggle(index)}
            >
                <div className="text-green-600 text-xl">
                    <FaMapMarkerAlt />
                </div>
                <div>
                    <h4 className="text-md font-semibold">{place.name}</h4>
                    <p className="text-sm text-gray-500">
                        {place.distance} away
                    </p>
                </div>
            </div>

            {/* Detail section */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-52 mt-3" : "max-h-0"
                }`}
            >
                <p className="text-sm text-gray-600">{place.desc}</p>
            </div>
        </div>
    );

    return (
        <section className="w-full min-h-screen bg-white py-10 relative">
            <h1 className="heading font-bold mb-6 px-4 mx-20">
                Nearby <br /> Locations
            </h1>
            <div className="flex flex-col md:flex-row gap-8 px-20">
                {/* Left column */}
                <div className="flex-1 flex flex-col gap-6">
                    {places.slice(0, 4).map((place, i) => renderCard(place, i))}
                </div>

                {/* Right column */}
                <div className="flex-1 flex flex-col gap-6">
                    {places
                        .slice(4)
                        .map((place, i) => renderCard(place, i + 4))}
                </div>
            </div>
            <div
                ref={mapRef}
                className="w-[90%] h-[80vh] mx-auto rounded-xl shadow-lg my-20"
            />
        </section>
    );
}
