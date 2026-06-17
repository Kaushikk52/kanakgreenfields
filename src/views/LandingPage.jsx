import React, { useEffect, useState } from "react";

import {
  Car,
  Dumbbell,
  Bike,
  Building2,
  Gamepad2,
  LayoutGrid,
  CircleDot,
  Waves,
  Utensils,
  UtensilsCrossed,
  Users2,
  BookOpen,
  Sofa,
  LayoutList,
  Accessibility,
  Coffee,
  Table,
  ToyBrick,
  Building,
  Home,
  Shield,
  ThermometerSnowflake,
  CloudRain,
  Sun,
  UserCircle,
  Footprints,
  TvMinimal,
  Fence,
  Biohazard,
  Joystick,
  Warehouse,
} from "lucide-react";

import bgImage from "../assets/1112.webp";
import FeatureBox from "../components/FeatureBox";
import Card from "../components/Card";
import sitePlan from "../assets/site-plan.png";
import endImage from "../assets/end.webp";
import mainImage from "../assets/main3.webp";
import scenary from "../assets/main2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

import MotionCarousel from "../components/MotionCarousel";
import Slide from "../components/Slide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import blackLogo from "../assets/blackLogo.png";
import NearbyPlacesSection from "../components/NearbyPlacesSection";
import tree from "../assets/tree.JPG";
import leopard from "../assets/leopard.jpg";
import fruits from "../assets/fruits.webp";

import Forest from "../assets/experiences/forest.webp";
import BBQDeck from "../assets/experiences/BBQDeck.webp";
import CoffeeBar from "../assets/experiences/CoffeeBar.webp";
import FruitPickingOrchards from "../assets/experiences/orange.webp";
import KidsPlayArea from "../assets/experiences/KidsPlayArea.webp";
import MiniTheater from "../assets/experiences/MiniTheater.webp";
import WaterTrails from "../assets/experiences/WaterTrails.webp";
import YogaGarden from "../assets/experiences/YogaGarden.webp";

import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import whiteLogo from "../assets/whiteLogo.png";
import { LiaTableTennisSolid } from "react-icons/lia";
import { GiShuttlecock } from "react-icons/gi";
import { IoMdCar } from "react-icons/io";
import { TbPlayFootball } from "react-icons/tb";
import { MdPool } from "react-icons/md";
import bgImage1 from "/bgimages/1.png";
import bgImage2 from "/bgimages/2.png";
import spirit from "/bgimages/ChatGPT Image Jun 11, 2026, 01_05_19 PM.png";

const LandingPage = () => {
  const features1 = [
    { icon: <Car size={40} />, label: "EV Stations" },
    { icon: <TvMinimal size={40} />, label: "Smart Systems" },
    { icon: <Shield size={40} />, label: "Security Features" },
    {
      icon: <ThermometerSnowflake size={40} />,
      label: "Thermal Insulation",
    },
    { icon: <CloudRain size={40} />, label: "Rainwater Harvesting" },
    { icon: <Sun size={40} />, label: "Solar  Energy" },
    { icon: <Fence size={40} />, label: "Gated Community" },
    {
      icon: <Biohazard size={40} />,
      label: "Waste Management",
    },
  ];

  const features2 = [
    { icon: <LiaTableTennisSolid size={40} />, label: "Table Tennis" },
    { icon: <GiShuttlecock size={40} />, label: "Badminton Court" },
    { icon: <Bike size={40} />, label: "Cycling Track" },
    { icon: <IoMdCar size={40} />, label: "Golf Cart" },
    { icon: <TbPlayFootball size={40} />, label: "Kids Play Area" },
    { icon: <MdPool size={40} />, label: "Swimming Pool" },
    { icon: <Footprints size={40} />, label: "Jogging Track" },
    { icon: <Joystick size={40} />, label: "Indoor Games" },
  ];

  const features3 = [
    { icon: <Dumbbell size={40} />, label: "Gym" },
    { icon: <CircleDot size={40} />, label: "Billiards" },
    { icon: <Waves size={40} />, label: "Sauna+ Spa" },
    { icon: <Utensils size={40} />, label: "Pool Side Restaurant" },
    { icon: <BookOpen size={40} />, label: "Library" },
    { icon: <Sofa size={40} />, label: "Lounge Area" },
    { icon: <Coffee size={40} />, label: "Coffee Shop" },
    { icon: <Warehouse size={40} />, label: "Banquet Hall" },
  ];

  const slides = [
    <Slide key="1" features={features1} title="Sustainable & Smart Living" />,
    <Slide key="2" features={features2} title="Sports Activities" />,
    <Slide key="3" features={features3} title="Clubhouse Amenities" />,
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      position: "absolute",
    }),
  };

  const bgImages = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]); // move down
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]); // scale up
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);
  return (
    <main className=" overflow-x-clip">
      {/* hero */}

      <section className="relative">
        <img
          src={bgImage1}
          className="absolute inset-0 h-full -z-10 w-screen object-cover object-center opacity-15"
        />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white z-10" />

        <div className="w-full h-[92vh] flex flex-col items-center justify-center gap-6 relative">
          <img
            src={blackLogo}
            alt="Aranyam"
            className="aspect-video h-50 md:h-72 opacity-20"
          />
          <h1 className="heading text-center">
            More than a home, its a living,
            <br /> breathing experience
          </h1>
        </div>
      </section>

      {/* Section 2 — merges seamlessly with section 1 fade */}
      <section className="w-screen bg-white flex flex-col items-center -mt-2">
        <div className="w-screen flex flex-col gap-10 items-center text-center px-8 md:px-20 pt-4 pb-10 md:pt-6 md:pb-14 max-w-6xl mx-auto">
          <h1 className="heading text-3xl md:text-4xl my-5 text-gray-900">
            Where Home Finds a Natural Meaning
          </h1>
          <p className="md:text-2xl text-md md:w-3/5 w-[90%] text-center text-[#457f5e] tracking-[0.003em]">
            Aranyam is a thoughtfully imagined mountain community, coming to
            life in the hills of Kumaon.
          </p>

          <p className="md:text-2xl text-md md:w-3/5 w-[90%] text-center text-[#457f5e] tracking-[0.003em]">
            Created for those who seek a deeper connection with nature, family,
            and time itself, Aranyam offers a gentler, different way of living.
            A way where home moves in rhythm with nature and becomes
            inseparable, almost rooted in its surroundings
          </p>
        </div>

        {/* Image with fade-in from top */}
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <img
            src={bgImage2}
            alt="Kumaon Hills"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </section>

      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div
          className="flex flex-col items-center w-full h-full justify-center z-20 bg-black/40 px-10 pb-10 "
          style={{ color: "white" }}
        >
          <img
            src={whiteLogo}
            alt="Aranyam"
            className=" md:h-[32vh] h-[20vh] z-20"
          />
          <h1 className="heading mb-8 text-center" style={{ color: "white" }}>
            Built in Conversation with Nature
          </h1>
          <p className=" text-center para md:w-[40%] w-[90%]">
            At Aranyam, the land comes first. Foundations remain the same, the
            surroundings undisturbed, and the terrain guides the process.The
            result is a community that feels as though it has always belonged
            there.
          </p>
        </div>
      </section>

      <section id="features2" className="w-screen">
        <div className="w-full bg-white md:py-10 md:px-20 mt-10">
          <div className="flex w-full md:h-[50vh]  items-end md:px-20 px-10">
            <div className=" bg-[#457f5e] md:w-[27vw] md:h-[40vh] w-[50vw] h-[18vh] mr-5">
              <img
                className="w-full h-full object-cover"
                src={leopard}
                alt=""
              />
            </div>
            <div className=" bg-[#457f5e] md:w-[22vw] md:h-[35vh]  w-[45vw] h-[13vh]">
              <img className=" w-full h-full object-cover" src={tree} alt="" />
            </div>
          </div>

          <div className="flex md:flex-row flex-col w-full min-h-[50vh]  md:px-25 md:py-6">
            <div className=" bg-[#457f5e] w-[10vw] h-[10vw] hidden md:block mr-5"></div>
            <div className=" bg-[#457f5e] md:w-[27vw] md:h-[40vh] w-[70vw] h-[25vh] md:mr-25 mt-5 md:mt-0 mx-15 md:mx-0">
              <img className="w-full h-full object-cover" src={fruits} alt="" />
            </div>
            <div className="  md:w-[35vw] w-[100%] min-h-[40vh]  md:p-10 p-8">
              <h1 className="heading text-5xl mb-8">
                Where Nature <br /> Writes Your Story
              </h1>

              <p className="md:text-2xl text-md md:w-3/5 w-full text-[#457f5e] tracking-[0.003em] para m-3">
                Aranyam lies deep within evergreen forests of oak, deodar, and
                blooming Buransh. Orchards brim with kafal, apricots, and
                litchis, woven into local life. Wildlife roams freely from
                leopards and black bears to the Himalayan Monal and rare
                butterflies. Here, nature isn 't a backdrop; it' s the story you
                live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section id="features" className="w-screen md:min-h-[160vh] ">
        <div className="w-full md:min-h-[180vh] h-[110vh]  grid grid-cols-2 md:grid-cols-3 gap-0">
          <div className=" flex-1 border-2 md:p-10 p-3 border-green-700">
            <h1 className="heading">Experiences</h1>
          </div>
          <FeatureBox title="Forest Trails" img={Forest} />
          <FeatureBox title="Yoga Gardens" img={YogaGarden} />
          <FeatureBox
            title="Fruit-Picking Orchards"
            img={FruitPickingOrchards}
          />
          <FeatureBox title="Water Trails" img={WaterTrails} />
          <FeatureBox title="BBQ Deck" img={BBQDeck} />
          <FeatureBox title="Coffee Bar" img={CoffeeBar} />
          <FeatureBox title="Mini Theater" img={MiniTheater} />
          <FeatureBox title="Kids’ Play Area" img={KidsPlayArea} />
        </div>
      </section>

      {/* "You Do Not Move to Aranyam" editorial section */}
      <section className="w-screen bg-white flex flex-col items-center py-16 md:py-24 px-6 md:px-16">
        {/* Heading — left aligned like PDF */}
        <h1 className="heading md:text-5xl text-3xl text-gray-900 text-left w-full max-w-6xl mx-auto mb-12 md:mb-16 leading-snug">
          You Do Not Move to Aranyam. You Come Back to It.
        </h1>

        <div className="w-full max-w-6xl mx-auto flex flex-col gap-16">
          {/* Image LEFT + Text RIGHT — matching PDF exactly */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">
            {/* Left: sketch image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[420px]">
              <img
                src={spirit}
                className="w-full h-full object-cover object-center rounded mix-blend-multiply opacity-90"
                alt="Aranyam architectural sketch"
              />
            </div>

            {/* Right: paragraph text, centered like PDF */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <p className="md:text-xl text-sm text-[#457f5e] font-light leading-relaxed text-center">
                There is an older idea of home — one that existed long before
                addresses and amenities. A place where you are known by the
                trees as much as by your neighbours. Where the first frost is
                cause for gathering, and the harvest moon is still something
                worth stepping outside for.
              </p>
            </div>
          </div>

          {/* Quote — full width, centered, separated by thin line */}
          <div className="flex flex-col items-center text-center border-t border-gray-200 pt-12">
            <p className="md:text-2xl text-base italic text-gray-600 font-light leading-relaxed max-w-3xl">
              "Belonging is not found. It grows — slowly, like the oak, in soil
              you have chosen to return to."
            </p>
            <span className="mt-4 text-sm text-gray-400 tracking-widest">
              The spirit of Aranyam
            </span>
          </div>
        </div>
      </section>

      {/* sustainable */}
      <section
        id="sustainable"
        className="w-screen h-[110vh] relative overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative w-full md:w-2/3  h-full flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {slides[index]}
            </motion.div>
          </AnimatePresence>
          {/* Navigation */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2  hover:bg-white/30 text-white p-2 rounded-full z-10"
          >
            <ChevronLeft size={50} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2  hover:bg-white/30 text-white p-2 rounded-full z-10"
          >
            <ChevronRight size={50} />
          </button>
        </div>
      </section>

      {/* features-2 */}
      <section id="features2" className="w-screen">
        <div className="w-full bg-white md:py-40 py-20 flex md:flex-row flex-col">
          <h1 className="md:text-5xl text-4xl font-bold text-green-900 mb-10 md:mb-6 px-2 mx-5   md:mx-20">
            Built to <br /> Belong
          </h1>
          <MotionCarousel />
        </div>
      </section>

      {/* "What You See Is Not the Whole Story" section */}
      <section className="w-screen bg-white flex flex-col items-center py-16 md:py-24 px-6 md:px-16">
        {/* Centered heading */}
        <h1 className="heading md:text-5xl text-3xl text-gray-900 text-center mb-12 md:mb-16 max-w-4xl mx-auto leading-snug">
          What You See Is Not the Whole Story
        </h1>

        {/* Text LEFT + Site Plan RIGHT */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: two paragraphs, centered text like PDF */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-center">
            <p className="md:text-xl text-sm text-[#457f5e] font-light leading-relaxed">
              Aranyam is not a resort, nor is it built for occasional visits or
              quick ownership. What you see here is only a glimpse. The essence
              of Aranyam lies in the spirit of the hills, and the feeling of
              returning again and again.
            </p>
            <p className="md:text-xl text-sm text-[#457f5e] font-light leading-relaxed">
              Some places are meant to be viewed. <br />
              Aranyam is meant to be experienced.
            </p>
          </div>

          {/* Right: site plan image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[420px]">
            <img
              src={sitePlan}
              alt="Aranyam Site Plan"
              className="w-full h-full object-contain object-center mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* nearbyPlaces */}
      <NearbyPlacesSection />

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
          <h1 className=" md:text-5xl text-2xl text-center text-white">
            This Isn't just a House. <br /> It's a Heritage in the Making.
          </h1>

          <p className=" md:w-2/3 w-[90%] md:text-lg mt-8 text-center font-stretch-50% tracking-tighter  font-bold text-white">
            If you feel drawn to what Aranyam stands for, we 'd be delighted to
            connect. No urgency. Just a conversation when the time feels right.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
