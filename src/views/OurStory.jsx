import React from "react";
import bgImage from "../assets/bg.jpg";
import bgImage2 from "../assets/bg2.jpg";
import bench from "../assets/bench.png";
import home from "../assets/home.jpg";
import whiteLogo from '../assets/whiteLogo.png'
const OurStory = () => {
    return (
        <main className=" overflow-x-clip">
            <section
                className=" w-screen h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <img src={whiteLogo} className=" h-3/5" alt="Aranyam" />
            </section>

            <section className=" w-screen h-[240vh] relative">
                <img
                    src={bgImage2}
                    className="absolute h-full -z-10 object-cover object-center opacity-15"
                    
                />

                <div className=" h-screen w-screen flex items-center flex-col justify-center gap-8">
                    <h1 className=" text-8xl text-green-800 ">Our Story</h1>
                    <h2 className=" text-4xl text-green-900">Not Built on the Land.</h2>
                    <p className="  text-2xl w-1/2 text-center text-green-800">
                        Tucked into the slopes of Nathuakhan, Aranyam is a
                        homecoming born from childhood memories and reimagined
                        for those seeking stillness. Here, trees stood before
                        blueprints, birdsong before broadband, and every stone
                        was laid in harmony with the forest. This isn’t luxury
                        that imposes it’s living that listens.
                    </p>
                </div>

                <div className=" h-screen w-screen flex items-center  justify-center ">
                    <div className="left h-full w-1/2 flex flex-col md:pl-30 pt-10  gap-8">
                        <h1 className=" heading text-left">
                            A Different <br />
                            Kind of <br />
                            Second Home
                        </h1>

                        <p className="para w-1/2">
                            Aranyam is what happens when design slows down.
                            Here, comfort and nature don’t compete — they
                            complement.Wide driveways curve with the contours.
                            Forest trails double as meditation paths. Cottages
                            come with open decks, not concrete fences. You’re
                            not here to escape the city — you’re here to
                            remember what real feels like. A place for parents
                            to breathe, for kids to roam free, and for memories
                            to grow wild
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

            <section className=" w-screen h-screen bg-green-700 flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white">What Build Us!</h1>

                <div className=" w-full flex items-center justify-center mt-20">
                    <div className="w-1/3 flex flex-col">
                        <div className=" w-2/3 flex flex-col items-center mb-8">
                            <h1 className="text-2xl text-white mb-3">VISION</h1>
                            <p className="text-xl text-white font-extralight">
                                Aranyam is a home that belongs to the land —
                                where architecture listens, nature is lived in,
                                and the pace of the hills is honored. A second
                                home that feels like your fifirst sense of
                                peace.
                            </p>
                        </div>
                        <div className=" w-2/3 flex flex-col items-center">
                            <h1 className="text-2xl text-white mb-3">
                                MISSION
                            </h1>
                            <p className="text-xl text-white">
                                We craft intentional homes rooted in the land —
                                built with local materials, traditional wisdom,
                                and a commitment to slow, meaningful living.
                                Quietly luxurious, effortlessly lasting, and
                                made for those who value authenticity over
                                excess.
                            </p>
                        </div>
                    </div>
                    <div className=" w-[600px] h-[400px] border">
                        <img
                            src={home}
                            className=" w-full h-full object-cover object-center"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section className=" w-screen min-h-screen relative overflow-hidden flex flex-col items-center justify-center gap-10">
                <img
                    src={bgImage2}
                    className="absolute w-full -z-10 object-cover object-center opacity-15"
                    alt=""
                />

                <h1 className="heading mb-3">Where the Hills Feel Like Home</h1>

                <div className=" flex">
                    <div className=" w-[550px] h-[500px] ">
                        <img
                            src={home}
                            className=" w-full h-full object-cover object-center"
                            alt=""
                        />
                    </div>

                    <div className="  p-20">
                        <ul className=" list-disc text-2xl w-[450px] text-green-800 flex flex-col gap-6">
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
        </main>
    );
};

export default OurStory;
