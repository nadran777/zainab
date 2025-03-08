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
    ],
    [
      { id: 7, src: client7, alt: "Client 7" },
      { id: 8, src: client8, alt: "Client 8" },
      { id: 9, src: client9, alt: "Client 9" },
      { id: 10, src: client10, alt: "Client 10" },
      { id: 11, src: client11, alt: "Client 11" },
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

// import React, { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import client1 from "../assets/clients/client1.jpg";
// import client2 from "../assets/clients/client2.jpg";
// import client3 from "../assets/clients/client3.jpg";
// import client4 from "../assets/clients/client4.jpg";
// import client5 from "../assets/clients/client5.jpg";
// import client7 from "../assets/clients/client7.jpg";
// import client8 from "../assets/clients/client8.jpg";
// import client9 from "../assets/clients/client9.jpg";
// import client10 from "../assets/clients/client10.jpg";
// import client11 from "../assets/clients/client11.jpg";

// const Clients = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [touchPosition, setTouchPosition] = useState(null);
//   const sRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   const slides = [
//     [
//             { id: 1, src: client1, alt: "Client 1" },
//             { id: 2, src: client2, alt: "Client 2" },
//             { id: 3, src: client3, alt: "Client 3" },
//             { id: 4, src: client4, alt: "Client 4" },
//             { id: 5, src: client5, alt: "Client 5" },
//           ],
//           [
//             { id: 7, src: client7, alt: "Client 7" },
//             { id: 8, src: client8, alt: "Client 8" },
//             { id: 9, src: client9, alt: "Client 9" },
//             { id: 10, src: client10, alt: "Client 10" },
//             { id: 11, src: client11, alt: "Client 11" },
//           ],
//         ];

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(handleNext, 4000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, activeSlide]);

//   const handleNext = () => {
//     setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleTouchStart = (e) => {
//     setIsAutoPlaying(false);
//     setTouchPosition(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     if (touchPosition === null) return;
//     const diff = touchPosition - e.touches[0].clientX;
//     if (Math.abs(diff) > 50) {
//       diff > 0 ? handleNext() : handlePrev();
//       setTouchPosition(null);
//     }
//   };

//   return (
//     <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] opacity-20"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Enhanced header section */}
//         <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
//             <span className="relative inline-block">
//               Our
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform -skew-x-12"></div>
//             </span>
//             {" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
//               Trusted Clients
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Partnering with industry leaders to create exceptional digital experiences
//           </p>
//         </div>

//         {/* Enhanced carousel section */}
//         <div className="relative group" data-aos="fade-up" data-aos-delay="200">
//           <div
//             ref={sRef}
//             className="overflow-hidden rounded-2xl shadow-xl bg-white"
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//           >
//             <div
//               className="flex transition-transform duration-700 ease-out"
//               style={{ transform: `translateX(-${activeSlide * 100}%)` }}
//             >
//               {slides.map((slide, slideIndex) => (
//                 <div key={slideIndex} className="w-full flex-shrink-0 p-8">
//                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//                     {slide.map((client) => (
//                       <div
//                         key={client.id}
//                         className="group/item relative transform hover:scale-105 transition-all duration-300"
//                       >
//                         <div className="bg-white rounded-xl p-6 h-32 flex items-center justify-center overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
//                           <img
//                             src={client.src}
//                             alt={client.alt}
//                             className="max-h-full w-auto object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-500"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Enhanced navigation buttons */}
//           <button
//             onClick={() => {
//               setIsAutoPlaying(false);
//               handlePrev();
//             }}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <button
//             onClick={() => {
//               setIsAutoPlaying(false);
//               handleNext();
//             }}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-800" />
//           </button>

//           {/* Enhanced pagination dots */}
//           <div className="flex justify-center mt-8 gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setActiveSlide(index);
//                   setIsAutoPlaying(false);
//                 }}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   activeSlide === index
//                     ? "w-8 bg-gradient-to-r from-red-600 to-red-400"
//                     : "w-2 bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// function Clients() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   // Using placeholder images for demonstration
//   const slides = [
//     [1, 2, 3, 4, 5].map(n => ({
//       id: n,
//       src: `/api/placeholder/240/160`,
//       alt: `Client ${n}`
//     })),
//     [6, 7, 8, 9, 10].map(n => ({
//       id: n,
//       src: `/api/placeholder/240/160`,
//       alt: `Client ${n}`
//     }))
//   ];

//   useEffect(() => {
//     if (isHovering) return;
//     const timer = setInterval(() => {
//       setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [isHovering, slides.length]);

//   return (
//     <section className="py-20 bg-gradient-to-b from-red-50 to-white">
//       {/* Decorative background pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] bg-repeat" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-6 text-red-700" style={{ direction: 'rtl' }}>
//             شركاؤنا المميزون
//             <span className="block text-2xl font-normal text-gray-600 mt-2" style={{ direction: 'ltr' }}>
//               Our Distinguished Partners
//             </span>
//           </h2>
//           <div className="w-32 h-1 bg-red-700 mx-auto mb-6 transform rotate-2"></div>
//         </div>

//         <div
//           className="relative group"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           <div className="overflow-hidden rounded-2xl bg-white shadow-xl border-2 border-red-100">
//             <div
//               className="flex transition-transform duration-700 ease-out"
//               style={{ transform: `translateX(-${activeSlide * 100}%)` }}
//             >
//               {slides.map((slide, slideIndex) => (
//                 <div key={slideIndex} className="w-full flex-shrink-0 p-8">
//                   <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
//                     {slide.map((client) => (
//                       <div
//                         key={client.id}
//                         className="transform hover:scale-105 transition-all duration-300"
//                       >
//                         <div className="bg-white rounded-xl p-6 h-32 flex items-center justify-center border border-red-100 hover:border-red-300 shadow-sm hover:shadow-md transition-all">
//                           <img
//                             src={client.src}
//                             alt={client.alt}
//                             className="max-h-full w-auto object-contain filter hover:brightness-110 transition-all duration-500"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-red-700 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2"
//           >
//             <ChevronLeft className="w-6 h-6 text-white" />
//           </button>

//           <button
//             onClick={() => setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-red-700 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2"
//           >
//             <ChevronRight className="w-6 h-6 text-white" />
//           </button>

//           <div className="flex justify-center mt-8 gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveSlide(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   activeSlide === index
//                     ? "w-8 bg-red-700"
//                     : "w-2 bg-red-200 hover:bg-red-300"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Clients;
