import React, { useEffect, useState } from "react";
import bgImage from "../assets/bg.webp";
import bgImage2 from "../assets/bg2.webp";
import bench from "../assets/bench.png";
import home from "../assets/home.jpeg";
import hills from "../assets/hills.jpg";
import KGFLogoWhite from "../assets/KGFLogoWhite.png";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import TeamSection from "../components/TeamSection";
import TeamSectionBackup from "../components/TeamSectionBackup";
import TeamSectionExperiment from "../components/TeamSectionExperiment";

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
                            index === current
                                ? "opacity-100 z-10"
                                : "opacity-0 z-0"
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

            <section className=" w-screen md:min-h-[240vh] relative">
                <img
                    src={bgImage2}
                    className="absolute h-full -z-10 object-cover object-center opacity-15"
                />

                <div className=" h-screen w-screen flex items-center flex-col justify-center gap-8">
                    <h1 className=" md:text-8xl text-4xl text-[#457f5e] ">
                        Our Story
                    </h1>
                    <h2 className=" md:text-4xl text-2xl text-green-800">
                        Not Built on the Land.
                    </h2>
                    <p className="  md:text-2xl text-md md:w-1/2 w-[90%] text-center text-[#457f5e]">
                        Tucked into the slopes of Nathuakhan, KGF is a
                        homecoming born from childhood memories and reimagined
                        for those seeking stillness. Here, trees stood before
                        blueprints, birdsong before broadband, and every stone
                        was laid in harmony with the forest. This isn’t luxury
                        that imposes it’s living that listens.
                    </p>
                </div>

                <div className=" min-h-screen w-screen flex md:flex-row flex-col-reverse items-center  justify-center ">
                    <div className="left h-full md:w-1/2 w-[90%] flex flex-col md:pl-30 py-10  gap-8">
                        <h1 className=" heading text-left">About KGF</h1>

                        <p className="para md:w-1/2 w-[90%]">
                            Kanak Green Fields is a project that aims at
                            building sustainable living that feels like home.
                            Without altering the natural environment, our
                            projects not just promote sustainable living, but
                            also abide by the ethos of local culture,
                            environment and traditions. With projects like
                            Aranyam and others in the pipeline, we aim at making
                            living simpler, but rooting ourselves back to nature
                            and the very place we came from-our roots.
                        </p>
                    </div>
                    <div className="right h-full w-[600px]">
                        <img
                            src={bench}
                            className=" h-full object-cover object-right"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section className=" w-screen min-h-screen bg-[#457f5e] flex overflow-hidden flex-col items-center md:justify-center py-10 md:py-8">
                <h1 className="md:text-5xl text-3xl text-white">
                    What Build Us!
                </h1>

                <div
                    className=" w-full flex md:flex-row flex-col
                 items-center justify-center md:mt-20 mt-7"
                >
                    <div className="md:w-1/3 w-[95%] flex flex-col items-center py-5 ">
                        <div className=" md:w-2/3 w-[90%]  flex flex-col items-center mb-8">
                            <h1 className="md:text-2xl text-lg text-white mb-3">
                                VISION
                            </h1>
                            <p className="md:text-xl text-sm text-white font-extralight">
                                At KGF, we create spaces that belong to the land
                                — where architecture listens, nature leads, and
                                sustainability is a way of life. Our work honors
                                the quiet rhythm of the hills, building not just
                                in nature, but in partnership with it — leaving
                                a lighter footprint and a deeper legacy.
                            </p>
                        </div>
                        <div className=" md:w-2/3 w-[90%] flex flex-col items-center">
                            <h1 className="md:text-2xl text-lg text-white mb-3">
                                MISSION
                            </h1>
                            <p className="md:text-xl text-sm text-white">
                                We craft intentional homes rooted in the land —
                                built with local materials, traditional wisdom,
                                and a commitment to slow, meaningful living.
                                Quietly luxurious, effortlessly lasting, and
                                made for those who value authenticity over
                                excess.
                            </p>
                        </div>
                    </div>
                    <div className=" w-[600px] h-[400px]">
                        <img
                            src={home}
                            className=" w-full h-full object-cover object-center"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section className=" w-screen min-h-screen  relative overflow-hidden flex flex-col items-center justify-center md:gap-10 gap-5">
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
                                Smooth connectivity without losing the rawness
                                of the hill
                            </li>
                            <li>
                                Pleasant weather year-round, with sunsets that
                                slow you down
                            </li>
                            <li>
                                A community that respects your space, not
                                disrupts it
                            </li>
                            <li>
                                Better roads, better Wi-Fi, and most importantly
                                — better balance
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <TeamSectionExperiment />
        </main>
    );
};

export default OurStory;
