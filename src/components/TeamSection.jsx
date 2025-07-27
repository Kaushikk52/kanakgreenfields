import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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


const team = [
  {
    name: "Nand Kishore Agrawal",
    role: "Chairman, Crystal Crop Protection",
    desc: "Mr. Nand Kishore Agrawal is the heart and soul, the visionary leader with 40+ years in agriculture. He has driven Crystal’s growth into a leading agrochemical company, offering end-to-end solutions and agri-extension services. A policy advocate and Co-Chair at PHDCCI, he’s held key roles in ACFI, HPMA, and CAPMA. Passionate about social impact, he champions initiatives in education, women’s empowerment, and rural health, earning the Atal Vibhushan Award.",
    image: member1,
  },
  {
    name: "Ankur Agrawal",
    role: "Managing Director, Crystal Crop Protection",
    desc: "With 20+ years of experience, Ankur Agrawal has transformed Crystal into one of India’s fastest-growing agri-input firms across agrochemicals, seeds, biologicals, and equipment. A De Montfort and Harvard alumnus, he leads innovation, CSR, and industry engagement as Chair of CropLife India.",
    image: member2,
  },
  {
    name: "Abhishek Agrawal",
    role: "Director, Aranyam Greens",
    desc: "With over 20 years in civil and structural construction, Abhishek Agrawal ensures precision and structural integrity at Aranyam Greens. As Project Director, he leads the execution of complex developments with global expertise and hands-on leadership.",
    image: member3,
  },
  {
    name: "Ateev Agrawal",
    role: "COO, CFO and Partner, AAR Polymax and Concept Engineers",
    desc: "Ateev Agrawal drives operations in plastics, automotive, agriculture, and infrastructure, with a ‘Make in India’ focus. An Ahmedabad and Glasgow alumnus, he blends strategy with ethical leadership and community development.",
    image: member4,
  },
  {
    name: "Ayush Agrawal",
    role: "Director, Aranyam Greens",
    desc: "Ayush Agrawal leads procurement and financial planning at Aranyam Greens with over a decade of experience. He ensures cost efficiency, vendor management, and sustainable project delivery through strong technical and commercial expertise.",
    image: member5,
  },
  {
    name: "Dhara Agrawal",
    role: "Director, Aranyam Greens",
    desc: "With 20+ years in construction and urban planning, Dhara Agrawal oversees project coordination and quality assurance. With degrees in Building Science and Urban Planning, she ensures smooth execution across all teams and consultants.",
    image: member6,
  },
  {
    name: "Vidushi Agrawal",
    role: "Marketing Director, Aranyam Greens",
    desc: "Vidushi Agrawal combines sustainable design and digital marketing expertise to shape Aranyam’s brand identity. With a PG Diploma from NMIMS, she leads creative direction and branding for a modern, nature-aligned lifestyle.",
    image: member7,
  },
  {
    name: "Puneet Kumar Bansal",
    role: "Founder, Puneet Kumar & Associates / Principal Architect, Aranyam Greens",
    desc: "With 20+ years in hospitality and sustainable architecture, Puneet designs with a deep respect for nature and vernacular techniques. His vision blends comfort, ecology, and cultural heritage in Aranyam Greens.",
    image: member8,
  },
  {
    name: "Komal Agrawal",
    role: "Director, Aranyam Greens",
    desc: "Komal Agrawal leads the project with empathy and strategic vision. With a background in Human Resources and passion for clean, nature-connected living, she shapes Aranyam as a legacy of simplicity and balance for future generations.",
    image: member9,
  },
  {
    name: "Pooja Bansal",
    role: "Chief Designer, Aranyam Greens",
    desc: "Pooja Bansal, a Sushant School alumna, creates spaces with emotional depth, sustainability, and precision. Rooted in local traditions, her designs reflect harmony between people, place, and purpose.",
    image: member10,
  },
];


export default function TeamAutoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 240;
  const gap = 24;
  const containerRef = useRef(null);

  // Auto-scroll every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to focused card
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollTo = activeIndex * (cardWidth + gap);
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <section className="w-full h-[100vh] bg-white flex md:flex-row flex-col-reverse items-center justify-center px-10">
      {/* Left: Info */}
      <div className="md:w-1/3 w-[90%] md:p-10 p-2 mt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="heading font-bold text-gray-800">{team[activeIndex].name}</p>
            <p className="text-sm text-gray-500 mb-3">{team[activeIndex].role}</p>
            <p className="para text-gray-700 italic md:max-w-md ">
              {team[activeIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: Carousel */}
      <div className="md:w-2/3 w-full h-[420px] relative">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide items-center h-full px-4"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className=" overflow-hidden flex-shrink-0 transition-transform"
              style={{ width: cardWidth, height: 380 }}
              animate={{
                scale: index === activeIndex ? 1.15 : 1,
                opacity: index === activeIndex ? 1 : 0.5,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover  shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
