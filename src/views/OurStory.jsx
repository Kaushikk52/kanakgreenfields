import React, { useEffect, useState } from "react";
import bgImage from "../assets/bg.webp";
import bgImage2 from "../assets/bg2.webp";
import bench from "../assets/bench.png";
import home from "../assets/home.jpeg";
import hills from "../assets/hills.jpg";
import img_1 from "/Image_1.png";
import img_2 from "/Image_2.png";
import KGFLogoWhite from "../assets/KGFLogoWhite.png";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import TeamSection from "../components/TeamSection";
import TeamSectionBackup from "../components/TeamSectionBackup";
import TeamSectionExperiment from "../components/TeamSectionExperiment";
import Testimonials from "../components/Testimonials";

const OurStory = () => {
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

        {/* Foreground Logo */}
        <motion.img
          src={KGFLogoWhite}
          alt="Aranyam"
          className="md:h-2/5 h-1/5 z-20"
          style={{
            y,
            scale,
          }}
        />
      </section>

      <section className="w-screen md:min-h-[100vh] relative">
        <img
          src={bgImage2}
          className="absolute h-full -z-10 w-screen object-cover object-center opacity-15"
        />

        <div className=" h-screen w-screen flex items-center flex-col justify-center gap-10">
          <div className="w-screen flex flex-col items-center gap-10">
          <h1 className="md:text-8xl text-4xl text-[#457f5e]">Our Story</h1>
          {/* <p className="md:text-2xl text-md md:w-1/2 w-[90%] text-center text-[#457f5e]" 
          style={{
                  WebkitTextStroke: "1.2px #457f5e",
            }}>
            Shaped by the hills, guided by family
          </p> */}
          </div>
          <p className="md:text-3xl text-md md:w-3/5 w-[90%] text-center text-[#457f5e] tracking-[0.003em]">
             Shaped by the hills, guided by family
          </p>

          <p className="md:text-3xl text-md md:w-3/5 w-[90%] text-center text-[#457f5e] tracking-[0.003em]">
            The journey of Kanak Green Fields started long before it became a
            company.
          </p>

          <p className="md:text-3xl text-md md:w-3/5 w-[90%] text-center text-[#457f5e] tracking-[0.003em]">
            It began with time spent in the hills of Kumaon. What started as the
            life we spent slow afternoons in, walking familiar paths in, and
            revering the mountains of Kumaon became, in a way, a way of life
            that stayed with us long after we left. Named after our mother,
            Kanak, who grew up here, this is an extension of our own home that
            we now want to share with the world.
          </p>
          <p className="md:text-3xl text-md md:w-3/5 w-[90%] text-center text-[#457f5e] tracking-[0.003em]">
            As a family, we came together not to build houses, but to make homes
            in the hills- places where others can come and build life in the
            same quiet rhythm we once knew to be home.
          </p>
        </div>

        {/* <div className=" min-h-screen w-screen flex md:flex-row flex-col-reverse items-center  justify-center ">
          <div className="left h-full md:w-1/2 w-[90%] flex flex-col md:pl-30 py-10  gap-8">
            <h1 className=" heading text-left">About KGF</h1>

            <p className="para md:w-1/2 w-[90%] text-[#457f5e]">
              Kanak Green Fields is a project that aims at building sustainable
              living that feels like home. Without altering the natural
              environment, our projects not just promote sustainable living, but
              also abide by the ethos of local culture, environment and
              traditions. With projects like Aranyam and others in the pipeline,
              we aim at making living simpler, but rooting ourselves back to
              nature and the very place we came from-our roots.
            </p>
          </div>
          <div className="right h-full w-[600px]">
            <img
              src={bench}
              className=" h-full object-cover object-right"
              alt=""
            />
          </div>
        </div> */}
      </section>

      <section className="w-screen min-h-screen bg-[#457f5e] flex overflow-hidden flex-col items-center md:justify-center py-10 md:py-8">
        <h1 className="md:text-5xl text-3xl text-white">What Build Us!</h1>

        <div className="w-full flex flex-col items-center md:mt-20 mt-7 mb-7 gap-16 px-6 md:px-16 max-w-6xl mx-auto">
          {/* Our Belief */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">
            {/* Text */}
            <div className="md:w-1/2 w-full flex flex-col tracking-tighter self-baseline">
              <h1 className="md:text-2xl text-lg text-white mb-3">
                Our Belief
              </h1>
              <div className="flex-col space-y-2">
                <p className="md:text-xl text-sm text-white font-extralight">
                  To us, the hills are not just land, but a life ready to
                  welcome everyone who seeks it.
                </p>
                <p className="md:text-xl text-sm text-white font-extralight">
                  Every place here asks nothing out of you, but instead gives
                  you a space to slow down, to notice, to take only what you
                  need. We believe mountains come with responsibility: to
                  protect what exists, to disturb as little as possible, and to
                  leave behind something that sits gently within its
                  surroundings. This isn’t about scale or speed. It’s about a
                  place that’s willing to hold you when you stop.
                </p>
                {/* <p className="md:text-xl text-sm text-white font-extralight">
                  This isn’t about scale or speed. It’s about care, patience,
                  and knowing when to stop.
                </p> */}
              </div>
            </div>

            {/* Image — right on desktop, below text on mobile */}
            <div className="md:w-1/2 w-full h-[300px] md:h-[400px] md:pl-10">
              <img
                src={img_1}
                className="w-full h-full object-cover object-center rounded"
                alt="Our Belief"
              />
            </div>
          </div>

          {/* Our Approach */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">
            {/* Text */}
            <div className="md:w-1/2 w-full flex flex-col tracking-tighter self-baseline">
              <h1 className="md:text-2xl text-lg text-white mb-3">
                Our Approach
              </h1>
              <span
                className="md:text-xl text-sm text-white mb-3 tracking-normal"
                style={{
                  WebkitTextStroke: "0.5px white",
                }}
              >
                Listening to the land before building on it.
              </span>
              {/* <h2 className="md:text-xl text-sm text-white mb-3 font-bold">
                We begin by spending time with the land.
              </h2> */}
              <div className="flex-col space-y-2">
                <p className="md:text-xl text-sm text-white font-extralight">
                  We begin by spending time with the land. Understanding the
                  trees and the water that has been here forever, we see what
                  the community around it needs - and what it doesn’t.
                </p>
                <p className="md:text-xl text-sm text-white font-extralight">
                  From there, everything follows. The built is carefully placed
                  with the slope, not against it. The planning is done around
                  trees and not without them. Materials are locally sourced.
                  Foundations are kept light. Spaces are conceptualised to
                  absorb the surrounding beauty and designed to be lived in,
                  slowly, fully, and over time.
                </p>
              </div>
            </div>

            {/* Image — right on desktop, below text on mobile */}
            <div className="md:w-1/2 w-full h-[300px] md:h-[400px] md:pl-10">
              <img
                src={img_2}
                className="w-full h-full object-cover object-center rounded"
                alt="Our Approach"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className=" w-screen min-h-screen  relative overflow-hidden flex flex-col items-center justify-center md:gap-10 gap-5">
        <img
          src={bgImage2}
          className="absolute h-full md:w-full -z-10 object-cover object-center opacity-15"
          alt=""
        />

        <h1 className="heading text-center mb-3">
          Where the Hills Feel Like Home
        </h1>

        <div className=" flex md:flex-row flex-col">
          <div className=" md:w-[550px] md:h-[500px] w-full ">
            <img
              src={hills}
              className=" w-full h-full object-cover object-center"
              alt=""
            />
          </div>

          <div className="  md:p-20 p-10">
            <ul className=" list-disc para md:w-[450px] w-[90%] text-green-800 flex flex-col md:gap-6 gap-3">
              <li>
                Smooth connectivity without losing the rawness of the hill
              </li>
              <li>
                Pleasant weather year-round, with sunsets that slow you down
              </li>
              <li>A community that respects your space, not disrupts it</li>
              <li>
                Better roads, better Wi-Fi, and most importantly better balance
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <Testimonials />

      <TeamSectionExperiment />
    </main>
  );
};

export default OurStory;
