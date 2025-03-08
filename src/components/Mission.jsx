import React, { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import mission from "../assets/images/mission.png";
import { motion } from "framer-motion";

const Mission = () => {
  const [imageHeight, setImageHeight] = useState("auto");
  const textSectionRef = useRef(null);

  useEffect(() => {
    if (textSectionRef.current) {
      setImageHeight(`${textSectionRef.current.clientHeight}px`);
    }
  }, []);

  const missionPoints = [
    {
      title: "Creative and Innovative Designs",
    },
    {
      title: "Boost Brand Awareness",
    },
    {
      title: "Custom Web Solutions",
    },
    {
      title: "Achieve Measurable Results",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Animations
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "4rem",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <div className="order-1 lg:order-1 space-y-8" ref={textSectionRef}>
            {/* Mission Header */}
            <div className="mb-12" data-aos="fade-up">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-10"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                <span className="relative inline-block">
                  Our
                  <motion.div
                    className="absolute h-0.5 bg-red-600"
                    style={{
                      top: "calc(100% + 0.5rem)",
                      left: 0,
                      right: 0,
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={underlineVariants}
                  ></motion.div>
                </span>
                {" Mission"}
              </motion.h2>
              <p className="text-gray-600 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                Empowering businesses with innovative, tailored, results-driven solutions.
              </p>
            </div>
            {missionPoints.map((point, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                className="group bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-red-600">{point.title}</h3>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2" data-aos="fade-right">
            <div className="relative group w-full h-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={mission}
                alt="Mission Image"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
                style={{ height: imageHeight }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
