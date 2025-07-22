import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Card from "./Card"; // your dynamic card component
import bgImage from "../assets/1112.jpg";


const cards = [
  {
    title: "Built to Belong",
    description:
      "At Aranyam, sustainability isn't an add-on — it's the foundation. We don't just build homes. We create ecosystems that breathe, regenerate, and live in harmony with the land.",
    mode: "center",
    bgColor: "bg-green-800",
  },
  {
    title: "Off-Grid Ready",
    description:
      "At Aranyam, sustainability isn't an add-on — it's the foundation. We don't just build homes. We create ecosystems that breathe, regenerate, and live in harmony with the land.",
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
    description:
      "At Aranyam, sustainability isn't an add-on — it's the foundation. We don't just build homes. We create ecosystems that breathe, regenerate, and live in harmony with the land.",
    image: bgImage,
    mode: "top",
  },
];

export default function MotionCarousel() {
  const carouselRef = useRef(null);
  const xControls = useAnimation();
  const [index, setIndex] = useState(0);
  const cardWidth = 500 + 16; // card + gap

  // Auto scroll every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (index + 1) % cards.length;
      setIndex(next);
      xControls.start({ x: -next * cardWidth });
    }, 4000);

    return () => clearInterval(interval);
  }, [index, xControls]);

  return (
    <section className="flex overflow-x-auto scrollbar-hide space-x-4 px-4">
      <motion.div
        ref={carouselRef}
        drag="x"
        dragConstraints={{ left: -cardWidth * (cards.length - 1), right: 0 }}
        animate={xControls}
        className="flex space-x-4 cursor-grab active:cursor-grabbing"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="min-w-[300px]"
            whileHover={{ scale: 1.03 }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
