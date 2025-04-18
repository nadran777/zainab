import {
  ArrowLeft,
  Home,
  FileText,
  Send,
  Globe,
  CheckCircle,
  Palette,
  Image,
  Layout,
  PenTool,
  ChevronUp,
  MessagesSquare,
  X,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "aos/dist/aos.css";
import AOS from "aos";
import graphicImg from "../assets/images/graphicdesign.webp";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function GraphicDesignPage() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //  Fixed Toggle
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleNavigateHome = () => {
    navigate("/");
  };

  // AOS
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const pricingPlans = [
    {
      name: "Basic",
      price: "499",
      description: "Essential design package for startups",
      features: ["Logo Design", "Business Card Design", "2 Design Revisions", "Basic Brand Guidelines", "Source Files"],
    },
    {
      name: "Professional",
      price: "999",
      description: "Complete branding solution for businesses",
      features: [
        "Logo Design & Variations",
        "Full Brand Identity",
        "Social Media Kit",
        "Marketing Materials",
        "5 Design Revisions",
        "Comprehensive Guidelines",
      ],
    },
    {
      name: "Enterprise",
      price: "1999",
      description: "Premium design package for large organizations",
      features: [
        "Custom Illustration Package",
        "Complete Brand System",
        "Print & Digital Assets",
        "Unlimited Revisions",
        "Priority Support",
        "Full Style Guide",
      ],
    },
  ];

  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Unique and innovative design solutions",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Cohesive visual brand development",
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Visual Content",
      description: "Eye-catching graphics and imagery",
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Custom Illustration",
      description: "Unique illustrated elements",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">Back</span>
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Homepage</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left" data-aos="fade-right">
              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-red-700 leading-tight">Creative Design Excellence</h1>
              <p className="text-gray-600 text-xl mb-8">
                Transform your brand with stunning visuals and creative designs that leave a lasting impression. We bring your
                ideas to life through innovative graphic design.
              </p>
              <button>
                <a
                  href="https://wa.me/917561010031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </a>
              </button>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src={graphicImg} alt="Graphic Design" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-red-700 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      {/* Design Services Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12 overflow-hidden">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-red-700">Our Design Services</h2>
              <motion.div
                className="h-1 w-20 bg-red-700 mx-auto mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              />
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                We create stunning visuals that capture your brand's essence and captivate your audience
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 border border-red-100 hover:border-red-200 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5,
                }}
              >
                <div className="flex items-center gap-4 mb-6 border-b border-red-100 pb-4">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-red-50 rounded-lg"
                  >
                    <Globe className="w-8 h-8 text-red-700" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Brand Design</h3>
                    <p className="text-red-600 text-sm font-medium">Visual Identity Excellence</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="bg-red-100 p-1 rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="w-4 h-4 text-red-700" />
                      </motion.div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 border border-red-100 hover:border-red-200 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5,
                }}
              >
                <div className="flex items-center gap-4 mb-6 border-b border-red-100 pb-4">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-red-50 rounded-lg"
                  >
                    <Send className="w-8 h-8 text-red-700" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Digital Design</h3>
                    <p className="text-red-600 text-sm font-medium">Engaging Visual Content</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {["Social Media Graphics", "Web Graphics", "Digital Advertising", "UI Design"].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="bg-red-100 p-1 rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="w-4 h-4 text-red-700" />
                      </motion.div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Pricing Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-700">Design Packages</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index === 1 ? "border-2 border-red-700" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-2xl font-bold text-red-700 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-500 ml-2">/package</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-700" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors ${
                  index === 1 ? "bg-red-700 text-white hover:bg-red-800" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div> */}

      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-4 z-50">
        {/* Contact Menu Button */}
        <div className="relative">
          {/* Contact Menu Items */}
          <div
            className={`
            absolute bottom-full mb-2 right-0
            flex flex-col gap-3
            transition-all duration-300 ease-in-out
            ${isVisible ? "transform translate-y-0" : "transform translate-y-16"}
            ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          >
            {/* Phone Button */}
            <a
              href="tel:+917561010031"
              className="
              flex items-center gap-3
              bg-blue-500 hover:bg-blue-600
              text-white
              px-4 py-2 rounded-full
              shadow-lg transform hover:scale-105
              transition-all duration-300
              group
            "
            >
              <Phone className="w-5 h-5" />
              <span className="hidden md:block text-sm font-medium">Call Us</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/7561010031"
              className="
              flex items-center gap-3
              bg-green-500 hover:bg-green-600
              text-white
              px-4 py-2 rounded-full
              shadow-lg transform hover:scale-105
              transition-all duration-300
              group
            "
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="hidden md:block text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Main Contact Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
            flex items-center justify-center
            w-12 h-12 md:w-14 md:h-14
            rounded-full shadow-lg
            transition-all duration-300
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            ${isMenuOpen ? "bg-red-500 rotate-45" : "bg-indigo-500 hover:bg-indigo-600"}
          `}
            aria-label="Toggle contact menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
            ) : (
              <MessagesSquare className="w-6 h-6 md:w-7 md:h-7 text-white" />
            )}
          </button>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`
          flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14
          bg-red-700 
          text-white rounded-full
          shadow-lg transform hover:scale-105
          transition-all duration-300
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
        `}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
        </button>
      </div>
    </div>
  );
}

export default GraphicDesignPage;
