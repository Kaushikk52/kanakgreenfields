import React from "react";

import {
    Car,
    Home,
    ShieldCheck,
    ThermometerSnowflake,
    CloudRain,
    Sun,
    Building,
} from "lucide-react";
import bgImage from "../assets/1112.jpg";
import FeatureBox from "../components/FeatureBox";
import Card from "../components/Card";
import sitePlan from "../assets/site-plan.jpeg";
import endImage from "../assets/end.jpg";
import mainImage from "../assets/main3.png";
import scenary from "../assets/main2.jpg";

import bbq from '../assets/experiences/bbq.jpg'
import bird from '../assets/experiences/bird.png'
import butterfly from '../assets/experiences/butterfly.png'
import coffee from '../assets/experiences/coffee.png'
import flower from '../assets/experiences/flower.png'
import forest from '../assets/experiences/forest.jpg'
import hills from '../assets/experiences/hills.jpg'
import orange from '../assets/experiences/orange.png'
import MotionCarousel from "../components/MotionCarousel";

const features = [
    { icon: <Car size={40} />, label: "EV Charging Stations" },
    { icon: <Home size={40} />, label: "Smart Systems" },
    { icon: <ShieldCheck size={40} />, label: "Security Features" },
    { icon: <ThermometerSnowflake size={40} />, label: "Thermal Insulation" },
    { icon: <CloudRain size={40} />, label: "Rainwater Harvesting" },
    { icon: <Sun size={40} />, label: "Solar  Energy" },
    { icon: <Building size={40} />, label: "Gated Community" },
    { icon: <ThermometerSnowflake size={40} />, label: "Thermal Insulation" },
];

const cards = [
  {
    title: "Built to Belong",
    description: "At Aranyam, sustainability isn't an add-on — it's the foundation. We don't just build homes. We create ecosystems that breathe, regenerate, and live in harmony with the land.",
    mode: "center",
    bgColor: "bg-green-800",
  },
  {
    title: "Off-Grid Ready",
    description: "At Aranyam, sustainability isn't an add-on — it's the foundation. We don't just build homes. We create ecosystems that breathe, regenerate, and live in harmony with the land.",
    image: bgImage,
    mode: "top",
  },
  {
    title: "Built Light, Built Local",
    description: "Stone, lime, reclaimed wood — all locally sourced. Built with Kumaoni hands and wisdom.",
    image: bgImage,
    mode: "bottom",
  },
  {
    title: "Off-Grid Ready",
    description: "At Aranyam, sustainability isn't an add-on — it's the foundation. We don't just build homes. We create ecosystems that breathe, regenerate, and live in harmony with the land.",
    image: bgImage,
    mode: "top",
  },
];

const LandingPage = () => {
    return (
        <main className=" overflow-x-clip">
            {/* hero */}
            <section
                id="home"
                className="w-screen h-screen bg-green-900 flex items-center justify-center"
                style={{
                    backgroundImage: `url(${mainImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="flex flex-col items-center w-[40%]"
                    style={{ color: "white" }}
                >
                    <h1 className="heading mb-10 " style={{ color: "white" }}>
                        The Living Experience
                    </h1>
                    <p className=" text-center para">
                        Twenty Cottages, Infinite Cahlmome Aranyam presents 3 &
                        4 BHK independent cottages with attics, private decks,
                        and personal gardens. No shared walls, no clutter—just
                        open skies, fresh air, and pure space.
                    </p>
                </div>
            </section>

            {/* site plan */}
            <section
                id="site-plan"
                className="w-screen h-screen flex justify-between p-15"
            >
                <h1 className="heading ">Site plan</h1>
                <img src={sitePlan} alt="" />
            </section>

            {/* sustainable */}
            <section
                id="sustainable"
                className="w-screen min-h-screen bg-cover bg-center flex items-center justify-center flex-col gap-8 px-4 py-12"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1
                    className="text-2xl md:text-4xl text-white text-center"
                    style={{ color: "white" }}
                >
                    Sustainable & Smart Living
                </h1>
                <div className="rounded-lg p-6 md:p-10 w-[90%] max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 text-white">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center text-center gap-3 hover:scale-105 rounded-lg p-4 transition"
                        >
                            <div>{feature.icon}</div>
                            <p className="md:text-2xl font-medium w-28">
                                {feature.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* features */}
            <section id="features" className="w-screen min-h-[160vh] ">
                <div className="w-full h-[50vh] flex items-center justify-center">
                    <h1 className="heading flex text-center">
                        More than a home, its a living,
                        <br /> breathing experience
                    </h1>
                </div>
                <div className="w-full md:min-h-[180vh] h-[110vh]  grid grid-cols-2 md:grid-cols-3 gap-0">
                    <div className=" flex-1 border-4 p-10 border-green-700">
                        <h1 className="heading">Experiences</h1>
                    </div>
                    <FeatureBox title="Forest Trails" img={forest} />
                    <FeatureBox title="Living Plants" img={flower} />
                    <FeatureBox title="BBQ Deck" img={bbq} />
                    <FeatureBox title="Great Nature" img={butterfly} />
                    <FeatureBox title="Coffee Bar" img={coffee} />
                    <FeatureBox title="Animal Habitat" img={bird} />
                    <FeatureBox title="Tranquil Water Trails" img={hills} />
                    <FeatureBox title="Delight Experience" img={orange} />
                </div>
            </section>

            {/* features-2 */}
            <section id="features2" className="w-screen">
                <div className="w-full bg-white py-40 flex">
                    <h1 className="text-6xl font-bold text-green-900 mb-6 px-4 mx-20">
                        Lorem <br /> Ipsum
                    </h1>
                    <MotionCarousel />
                    {/* <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4">
                        <Card
                            mode="center"
                            title="Built to Belong"
                            description="At Aranyam, sustainability isn't an add-on — it's the foundation. We don't just build homes. We create ecosystems that breathe, regenerate, and live in harmony with the land."
                            bgColor="bg-green-800"
                        />

                        <Card
                            mode="top"
                            image={bgImage}
                            title="Off-Grid Ready"
                            description="At Aranyam, sustainability isn't an add-on — it's the foundation. We don't just build homes. We create ecosystems that breathe, regenerate, and live in harmony with the land."
                        />

                        <Card
                            mode="bottom"
                            image={bgImage}
                            title="Built Light, Built Local"
                            description="Stone, lime, reclaimed wood — all locally sourced. Built with Kumaoni hands and wisdom."
                        />

                        <Card
                            mode="top"
                            image={bgImage}
                            title="Built Light, Built Local"
                            description="Stone, lime, reclaimed wood — all locally sourced. Built with Kumaoni hands and wisdom."
                        />
                    </div> */}
                </div>

                <div className="w-full bg-white py-10 md:px-20">
                    <div className="flex w-full h-[50vh]  items-end px-20">
                        <div className=" bg-green-700 w-[27vw] h-[40vh] mr-5">
                            <img
                                className="w-full h-full object-cover"
                                src={bird}
                                alt=""
                            />
                        </div>
                        <div className=" bg-green-700 w-[22vw] h-[35vh]">
                            <img
                                className=" w-full h-full object-cover"
                                src={scenary}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="flex w-full h-[50vh]  px-25 py-6">
                        <div className=" bg-green-700 w-[10vw] h-[10vw] mr-5"></div>
                        <div className=" bg-green-700 w-[27vw] h-[40vh] mr-25">
                            <img
                                className="w-full h-full object-cover"
                                src={orange}
                                alt=""
                            />
                        </div>
                        <div className="  w-[35vw] h-[40vh] p-10">
                            <h1 className="heading text-5xl mb-8">
                                A Landscape That <br /> Breathe With You
                            </h1>

                            <p className=" para">
                                Aranyam lies deep in Kumaon’s evergreen forests,
                                where oaks, deodars, and blooming Buransh
                                thrive. Orchards brim with kafal, apricots, and
                                litchis, rooted in local life.Wildlife roams
                                freely—from leopards and black bears to the
                                Himalayan Monal and rare butterflies. Here,
                                nature isn’t a backdrop—it’s the story you live
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* nearbyPlaces */}
            <section className="w-full h-screen bg-white py-10 ">
                <h1 className="heading font-bold mb-6 px-4 mx-20">
                    Nearby <br /> Locations
                </h1>
            </section>

            {/* heritage */}
            <section
                className="w-screen min-h-screen bg-cover bg-center flex items-center justify-end flex-col gap-8  "
                style={{
                    backgroundImage: `url(${endImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className=" flex flex-col items-center w-full h-1/2 bg-gradient-to-t from-60% from-amber-950/70 to-transparent py-20">
                    <h1 className=" text-5xl text-center text-white">
                        This Isn't just a House. <br /> It's a Heritage in the
                        Making.
                    </h1>

                    <p className=" w-2/3 text-lg mt-8 text-center font-stretch-50% tracking-tighter  font-bold text-white">
                        For the founders, Aranyam is personal — a tribute to the
                        childhood they were lucky to live, and a gift to those
                        who still believe in magic without screens. This is for
                        the children who deserve trees over tablets. For parents
                        who want silence without sacrifice. For anyone who wants
                        more meaning, and less noise.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;
