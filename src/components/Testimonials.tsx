import { useEffect, useRef, useState } from "react";
import sudhir from "/testimonials/1.png";
import jaydutt from "/testimonials/2.png";

const testimonials = [
  {
    quote:
      "The most remarkable aspect of KGF team and therefore Aranyam is the commitment to letting the land lead the planning process. The promoters have shown genuine respect for the forest, water systems, and natural terrain, creating the foundation for a truly enduring mountain community.",
    name: "Jaydutt Vaishnav",
    org: "Living Roots",
    bio: "Urban planner and environmental designer. Expert in integrating sustainability and landscape ecology into urban and architectural projects across India.",
    image: jaydutt,
  },
  {
    quote:
      "Having worked on projects across hospitality, residential, and institutional sectors for over three decades, I have learned that good developments begin with the right intent. What stands out about Aranyam is the seriousness with which the promoters have approached long-term sustainability, infrastructure, and maintenance. Their focus is not simply on creating homes, but on creating a community that can be enjoyed by generations while remaining responsible to its environment.",
    name: "Sudhir Mathur",
    org: "Shreshtha Consultants",
    bio: "Engineering graduate from MNIT, expert in HVAC, Electrical, Fire and Plumbing.",
    image: sudhir,
  },
];

const CARD_WIDTH = 240;
const GAP = 24;
const STRIDE = CARD_WIDTH + GAP;

const NavButton = ({
  onClick,
  label,
  dir,
}: {
  onClick: () => void;
  label: string;
  dir: "left" | "right";
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="flex-shrink-0 z-10 rounded-full bg-white/90 hover:bg-white shadow p-2 transition"
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d={dir === "left" ? "M15 6L9 12L15 18" : "M9 6L15 12L9 18"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </button>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: activeIndex * STRIDE,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section className="w-screen relative py-12 overflow-hidden">
      {/* Heading */}
      <p className="text-center text-xs tracking-widest uppercase text-[#457f5e] mb-2">
        Testimonials
      </p>
      <h2 className="text-center text-3xl md:text-4xl text-[#2a5c3f] mb-10 font-medium">
        In Their Words
      </h2>

      {/* Single row: arrow | quote | arrow */}
      <div className="relative max-w-4xl mx-auto px-4 select-none">
        {/* Left arrow */}
        <div className="absolute left-2 md:-left-6 top-1/2 z-20">
          <NavButton onClick={prev} label="Previous" dir="left" />
        </div>
        {/* Quote card */}
        <div className="flex-1 border border-[#a8cbb8] rounded-2xl p-8 flex flex-col bg-white/80 backdrop-blur-sm min-h-[320px]">
          <span className="text-6xl leading-none text-[#457f5e] opacity-20 font-serif select-none">
            "
          </span>

          <p className="text-[#2a2a2a] text-base md:text-lg leading-relaxed font-serif flex-1 mt-2">
            {active.quote}
          </p>

          <span className="text-6xl leading-none text-[#457f5e] opacity-20 font-serif select-none self-end">
            "
          </span>

          {/* Attribution */}
          <div className="border-t border-[#a8cbb8] pt-4 mt-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#a8cbb8]">
              {active.image ? (
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-[#457f5e]/20 flex items-center justify-center text-[#2a5c3f] font-medium text-sm">
                  {active.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-medium text-[#2a5c3f] text-sm">
                {active.name}
              </p>
              <p className="text-xs font-medium text-[#457f5e]">{active.org}</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {active.bio}
              </p>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-[#457f5e] w-6" : "bg-[#a8cbb8] w-1.5"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <div className="absolute right-2 md:-right-6 top-1/2 z-20">
          <NavButton onClick={next} label="Next" dir="right" />
        </div>
      </div>
    </section>
  );
}
