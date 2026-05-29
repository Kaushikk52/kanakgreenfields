import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Card from "./Card";
import bgImage from "../assets/1112.webp";
import img1 from "../assets/built/1.png";
import img2 from "../assets/built/2.png";
import img3 from "../assets/built/3.jpg";
import img4 from "../assets/built/4.jpg";
import img5 from "../assets/built/5.png";
import img6 from "../assets/built/6.png";

const cards = [
  { title: "Smart by Nature", description: "Homes are placed with the slope, not against it preserving trees, soil, and silence.", image: img1, mode: "top" },
  { title: "Built Light, Built Local", description: "Stone, lime, reclaimed wood all locally sourced. Built by Kumaoni hands with age-old wisdom.", image: img2, mode: "top" },
  { title: "Cool Without ACs", description: "Passive design principles ensure homes stay warm in winter, cool in summer naturally.", image: img3, mode: "top" },
  { title: "Water Conscious, Always", description: "Rainwater harvesting, greywater recycling, eco-irrigation, and native planting keep every drop in balance.", image: img4, mode: "top" },
  { title: "Low Waste Living", description: "Composting, waste segregation, and plastic-free zones help keep the land as clean as the air.", image: img5, mode: "top" },
  { title: "Off-Grid Ready", description: "Solar-ready systems and modular tech make every home future-proof and self-reliant.", image: img6, mode: "top" },
  { title: "Biodiversity-First", description: "Native flora invites pollinators. Fruit trees feed wildlife. No turf, no tokenism.", image: bgImage, mode: "top" },
];

export default function MotionCarousel() {
  const xControls = useAnimation();
  const [index, setIndex] = useState(0);

  // measure responsive card width (+ gap)
  const firstCardRef = useRef(null);
  const trackRef = useRef(null);
  const gapRef = useRef(0);
  const [cardWidth, setCardWidth] = useState(0);

  const computeGap = () => {
    if (!trackRef.current) return 0;
    const style = window.getComputedStyle(trackRef.current);
    const val = parseFloat(style.columnGap || style.gap || "0");
    return isNaN(val) ? 0 : val;
  };

  useEffect(() => {
    const updateSize = () => {
      gapRef.current = computeGap();
      if (firstCardRef.current) {
        const rect = firstCardRef.current.getBoundingClientRect();
        setCardWidth(rect.width + gapRef.current);
      }
    };

    updateSize();

    const ro = new ResizeObserver(updateSize);
    if (firstCardRef.current) ro.observe(firstCardRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", updateSize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // auto-advance every 4s
  useEffect(() => {
    if (!cardWidth) return;
    const id = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % cards.length;
        xControls.start({
          x: -next * cardWidth,
          transition: { type: "spring", stiffness: 300, damping: 30 },
        });
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [cardWidth, xControls]);

  // keep position in sync on resize/breakpoints
  useEffect(() => {
    if (!cardWidth) return;
    xControls.set({ x: -index * cardWidth });
  }, [cardWidth, index, xControls]);

  const maxDragLeft = -(Math.max(cards.length - 1, 0) * cardWidth);

  return (
    <section className="w-full overflow-hidden px-2 sm:px-4 lg:px-8">
      <motion.div
        ref={trackRef}
        className="flex gap-3 sm:gap-4 lg:gap-6 cursor-grab active:cursor-grabbing select-none"
        drag="x"
        dragConstraints={{ left: maxDragLeft, right: 0 }}
        animate={xControls}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            ref={idx === 0 ? firstCardRef : null}
            // wrapper controls width; Card uses w-full inside
            className="shrink-0 min-w-[85vw] sm:min-w-[420px] lg:min-w-[500px]"
            whileHover={{ scale: 1.02 }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
