import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollToPlugin, Draggable);
import member1 from "../assets/team/member1.png";
import member2 from "../assets/team/member2.png";
import member3 from "../assets/team/member3.png";
import member4 from "../assets/team/member4.png";
import member5 from "../assets/team/member5.png";
import member6 from "../assets/team/member6.png";
import member7 from "../assets/team/member7.png";
import member8 from "../assets/team/member8.png";
import member9 from "../assets/team/member9.png";
import member10 from "../assets/team/member10.png";
import member11 from "../assets/team/member11.png";

const team = [
  {
    name: "Mr. N.K. Aggarwal",
    role: "Mentor & Long-term Guide",
    desc: "Brings decades of experience and a steady, long-view perspective to every decision we make.",
    image: member1,
  },
  {
    name: "Ankur Aggarwal",
    role: "Capital Steward",
    desc: "Ensures every step we take is measured, responsible, and built to last.",
    image: member2,
  },
  {
    name: "Komal Aggarwal",
    role: "Project Continuity & Team Balance",
    desc: "Keeps the process grounded, thoughtful, and aligned across people and timelines.",
    image: member11,
  },

  {
    name: "Abhishek Aggarwal",
    role: "Execution & Project Stewardship",
    desc: "On-ground, ensuring what is envisioned is built with care and precision.",
    image: member3,
  },
  {
    name: "Pooja Bansal",
    role: "Project Guide & Design Custodian",
    desc: "Holds the design intent together, making sure it stays true from idea to execution.",
    image: member10,
  },
  {
    name: "Dhara Aggarwal",
    role: "Project Management & Communication",
    desc: "Connects teams, ideas, and people, keeping everything moving with clarity.",
    image: member6,
  },
  {
    name: "Ayush Aggarwal",
    role: "Construction Systems & On-ground Support",
    desc: "Focuses on how things are built, ensuring strength, efficiency, and sensitivity to the site.",
    image: member5,
  },
  {
    name: "Vidushi Aggarwal",
    role: "Brand Voice & Guest Experience",
    desc: "Shapes how the world experiences KGF, from the first interaction to the stay itself.",
    image: member7,
  },
  {
    name: "Puneet Bansal",
    role: "Principal Architect & Design Lead",
    desc: "Shapes spaces that respond to the land, not override it.",
    image: member8,
  },
  {
    name: "Ateev Aggarwal",
    role: "Thought & Relationship Building",
    desc: "Builds long-term relationships, bringing people into this journey with us.",
    image: member4,
  },
  {
    name: "Komal Agrawal",
    role: "People & Culture",
    desc: "Komal Agrawal leads the project with empathy and strategic vision. With a background in Human Resources and passion for clean, nature-connected living, she shapes Aranyam as a legacy of simplicity and balance for future generations.",
    image: member9,
  },
];

export default function TeamSectionExperiment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const CARD_WIDTH = 240;
  const GAP = 15; // matches Tailwind gap-6
  const STRIDE = CARD_WIDTH + GAP;

  // 1) Infinite autoplay: advance every 5s
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % team.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // 2) Whenever activeIndex changes, scroll smoothly to that card
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: activeIndex * STRIDE, behavior: "smooth" });
  }, [activeIndex]);

  // 3) Buttons
  const prev = () => setActiveIndex((i) => (i - 1 + team.length) % team.length);
  const next = () => setActiveIndex((i) => (i + 1) % team.length);

  return (
    <section className="bg-white py-12 md:py-20">
      <h1 className="text-center mb-3 md:text-7xl text-3xl text-[#457f5e] ">Who We Are</h1>
      <h2 className="text-center md:text-4xl text-2xl text-green-800">
        A family with an intention
      </h2>
      <div className="w-screen md:min-h-screen min-h-[130vh] flex md:flex-row flex-col-reverse items-center justify-center select-none">
        {/* Left: Info */}
        <div className="md:w-1/3 w-[90%] md:p-10 p-2 mt-5">
          <p className="heading font-bold text-gray-800">
            {team[activeIndex].name}
          </p>
          <p className="text-sm text-gray-500 mb-3">{team[activeIndex].role}</p>
          <p className="para text-gray-700 italic md:max-w-md">
            {team[activeIndex].desc}
          </p>
        </div>

        {/* Right: Carousel */}
        <div className="md:w-2/3 w-full h-[420px] relative">
          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 hover:bg-white shadow p-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 hover:bg-white shadow p-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto items-center h-full px-4
                     [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            /* NOTE: avoid 'scroll-smooth' class here—native smooth in JS is enough */
          >
            {team.map((member, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden flex-shrink-0 bg-gradient-to-b from-[#457f5e] to-[#274735]
                            transition-transform duration-300 ease-out
                            ${isActive ? "scale-110 opacity-100" : "scale-100 opacity-60"}`}
                  style={{ width: CARD_WIDTH, height: 380 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover shadow-md pointer-events-none"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
