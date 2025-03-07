import { Code, Palette, PenTool } from "lucide-react";
import { useNavigate } from "react-router";
import Loader from "./Loader";
import { useState } from "react";
import { motion } from "framer-motion";

function Services() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    {
      icon: <Code className="w-12 h-12 text-red-700" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      path: "/services/web-development",
    },
    {
      icon: <Palette className="w-12 h-12 text-red-700" />,
      title: "Graphic Design",
      description: "Creative visual solutions that capture your brand's essence.",
      path: "/services/graphic-design",
    },
    {
      icon: <PenTool className="w-12 h-12 text-red-700" />,
      title: "Content Writing",
      description: "Engaging content that tells your story and connects with your audience.",
      path: "/services/content-writing",
    },
  ];

  const navigatePath = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`${path}`);
      setIsLoading(false);
      // Scroll to top after navigation
      window.scrollTo(0, 0);
    }, 500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

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
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconAnimation = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
        },
      },
    },
  };

  return (
    <div>
      {isLoading && <Loader />}
      <div className="py-10 pt-20 bg-white">
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
                className="absolute top-16 left-0 w-full h-0.5 bg-red-600"
                initial="hidden"
                animate="visible"
                variants={underlineVariants}
              ></motion.div>
            </span>
            {" Services"}
          </motion.h2>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-3xl shadow-lg transform transition-all cursor-pointer flex flex-col items-center justify-center text-center"
                onClick={() => navigatePath(service.path)}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon Section */}
                <motion.div
                  className="flex justify-center items-center mb-6 p-4 bg-red-50 rounded-full shadow-lg"
                  whileHover="hover"
                  variants={iconAnimation}
                >
                  {service.icon}
                </motion.div>

                {/* Title Section */}
                <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">{service.title}</h4>

                {/* Description Section */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
