import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import member1 from "../assets/img1.jpg";
import member2 from "../assets/img1.jpg";
import member3 from "../assets/img1.jpg";
import member4 from "../assets/img1.jpg"; // extend as needed

const team = [
  {
    name: "Ashley Right",
    role: "Pinterest",
    quote: "Professionals in their craft...",
    image: member1,
  },
  {
    name: "John Doe",
    role: "Behance",
    quote: "A creative powerhouse...",
    image: member2,
  },
  {
    name: "Alex Lee",
    role: "Adobe",
    quote: "Designs that speak...",
    image: member3,
  },
  {
    name: "Lena Smith",
    role: "Google",
    quote: "Visionary design execution...",
    image: member4,
  },
  {
    name: "Ashley Right",
    role: "Pinterest",
    quote: "Professionals in their craft...",
    image: member1,
  },
  {
    name: "John Doe",
    role: "Behance",
    quote: "A creative powerhouse...",
    image: member2,
  },
  {
    name: "Alex Lee",
    role: "Adobe",
    quote: "Designs that speak...",
    image: member3,
  },
  {
    name: "Lena Smith",
    role: "Google",
    quote: "Visionary design execution...",
    image: member4,
  },
  {
    name: "Lena Smith",
    role: "Google",
    quote: "Visionary design execution...",
    image: member4,
  },
  {
    name: "Lena Smith",
    role: "Google",
    quote: "Visionary design execution...",
    image: member4,
  },
];

export default function TeamAutoCarousel() {
  const [index, setIndex] = useState(0);
  const CARD_WIDTH = 180;
  const GAP = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[80vh] bg-white flex items-center ">
      

      {/* Right: Carousel */}
      <div className="w-1/2 overflow-hidden relative h-full flex items-center">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ((index - (team.length - 1)) * (CARD_WIDTH + GAP)),
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg flex-shrink-0"
              style={{ width: CARD_WIDTH, height: 300 }}
              animate={{
                scale: i === index ? 1.15 : 1,
                opacity: i === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Left: Team Member Info */}
      <div className="w-1/2 pr-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 20 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl font-semibold text-gray-800">
              {team[index].name}
            </p>
            <p className="text-sm text-gray-500 mb-3">{team[index].role}</p>
            <p className="text-md text-gray-700 italic max-w-md">
              “{team[index].quote}”
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
