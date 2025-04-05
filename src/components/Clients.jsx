import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import client1 from "../assets/clients/client1.jpg";
import client2 from "../assets/clients/client2.jpg";
import client3 from "../assets/clients/client3.jpg";
import client4 from "../assets/clients/client4.jpg";
import client5 from "../assets/clients/client5.jpg";
import client7 from "../assets/clients/client7.jpg";
import client8 from "../assets/clients/client8.jpg";
import client9 from "../assets/clients/client9.jpg";
import client10 from "../assets/clients/client10.jpg";
import client11 from "../assets/clients/client11.jpg";
import client12 from "../assets/clients/client12.jpg";
import client13 from "../assets/clients/client13.jpg";
import client14 from "../assets/clients/client14.jpg";
import client15 from "../assets/clients/client15.jpg";

const Clients = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);
  const sRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const slides = [
    [
      { id: 1, src: client1, alt: "Client 1" },
      { id: 2, src: client2, alt: "Client 2" },
      { id: 3, src: client3, alt: "Client 3" },
      { id: 4, src: client4, alt: "Client 4" },
      { id: 5, src: client5, alt: "Client 5" },
      { id: 12, src: client12, alt: "Client 12" },
      { id: 13, src: client13, alt: "Client 13" },
    ],
    [
      { id: 7, src: client7, alt: "Client 7" },
      { id: 8, src: client8, alt: "Client 8" },
      { id: 9, src: client9, alt: "Client 9" },
      { id: 10, src: client10, alt: "Client 10" },
      { id: 11, src: client11, alt: "Client 11" },
      { id: 14, src: client14, alt: "Client 14" },
      { id: 15, src: client15, alt: "Client 15" },
    ],
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeSlide]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    setIsAutoPlaying(false);
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();

    setTouchPosition(null);
  };

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
    <section className="py-16 mb-20 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
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
            {" Trusted Clients"}
          </motion.h2>
        <div className="relative group" data-aos="fade-right">
          <div ref={sRef} className="overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${activeSlide * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                    {slide.map((client) => (
                      <div key={client.id} className="transform hover:scale-105 transition-all duration-300">
                        <div className="bg-gray-50  rounded-xl shadow-sm hover:shadow-md p-6 h-32 flex items-center justify-center overflow-hidden border border-gray-100">
                          <img
                            src={client.src}
                            alt={client.alt}
                            className="max-h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setIsAutoPlaying(false);
              handlePrev();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-50  p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              handleNext();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "w-8 bg-red-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
