import React, { useEffect, useState } from "react";
import { ChevronUp, Mail, MessagesSquare, Phone, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Clients from "../components/Clients";
import Header from "../components/Header";
import Services from "../components/Services";
import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "India",
      value: "+917561010031",
      link: "tel:+917561010031",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "UAE",
      value: "+9710545163760",
      link: "tel:+9710545163760",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "connectzainabads@gmail.com",
      link: "mailto:connectzainabads@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/zainabads",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/zainab-ads",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/7561010031",
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      href: "https://www.facebook.com/zainabads",
    },
  ];

  // Fixed Toggle
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
    <>
     

      <div className="bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <div>
          <Header />
        </div>

        {/* Vision Section */}
        <div>
          <Vision />
        </div>

        {/* Mission Section */}
        <div>
          <Mission />
        </div>

        {/* Service Section */}
        <div>
          <Services />
        </div>

        {/* Client Section */}
        <div>
          <Clients />
        </div>

        {/* Contact Section */}
        <section className="bg-white py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-10"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                <span className="relative inline-block">
                  Get
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
                {" In Touch"}
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* About Card */}
              <div
                className="bg-gray-50 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl p-6 lg:p-8"
                data-aos="fade-right"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">About Zainab Ads</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-200 mb-6"></div>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">
                    We are a creative digital marketing agency specializing in helping businesses grow their online presence. Our
                    team of experts delivers innovative solutions in web development, digital marketing, and brand strategy.
                  </p>
                  <p className="leading-relaxed">
                    With years of experience and a passion for excellence, we've helped numerous businesses achieve their digital
                    marketing goals and establish a strong online presence in the competitive digital landscape.
                  </p>
                  <p className="leading-relaxed">
                    At Zainab Ads, we take pride in understanding your business needs and tailoring our strategies to meet your
                    unique goals. From search engine optimization (SEO) to social media marketing, we provide a full suite of
                    services that ensure your business stands out online.
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div
                className="bg-gray-50 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl p-6 lg:p-8"
                data-aos="fade-left"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-red-200 mb-6"></div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a key={index} href={info.link} className="flex items-center space-x-4 group">
                      <div className="bg-red-50 p-3 rounded-full text-red-600 group-hover:bg-red-100 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{info.title}</p>
                        <p className="text-gray-600 group-hover:text-red-600 transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}

                  <div className="pt-6">
                    <p className="font-semibold text-gray-800 mb-4">Connect With Us</p>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-red-700 rounded-xl hover:bg-red-100 transition-all duration-300"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed Icons */}
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-4 z-50">
          {/* Contact Menu Button */}
          <div className="relative">
            {/* Contact Menu Items */}
            <div
              className={`absolute bottom-full mb-2 right-0 flex flex-col gap-3 transition-all duration-300 ease-in-out ${
                isVisible ? "transform translate-y-0" : "transform translate-y-16"
              } ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
              {/* Phone Button */}
              <a
                href="tel:+917561010031"
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden md:block text-sm font-medium">Call Us</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/7561010031"
                target="_blank"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span className="hidden md:block text-sm font-medium">WhatsApp</span>
              </a>
            </div>

            {/* Main Contact Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg transition-all duration-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              } ${isMenuOpen ? "bg-red-500 rotate-45" : "bg-indigo-500 hover:bg-indigo-600"}`}
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
            className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-red-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 md:w-7 md:h-7 animate-bounce" />
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
