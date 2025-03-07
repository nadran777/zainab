import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import navIcon from "../assets/images/nav-icon.png";
import Loader from "./Loader";

function Header({ currentPath = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const serviceItems = [
    { path: "/services/web-development", label: "Web Development" },
    { path: "/services/content-writing", label: "Content Writing" },
    { path: "/services/graphic-design", label: "Graphic Design" },
  ];

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "/services",
      label: "Services",
      hasDropdown: true,
      dropdownItems: serviceItems,
    },
    // { path: "/Our-Works", label: "Our Works" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavigation = (path) => {
    setIsLoading(true); // Trigger loader on navigation
    setTimeout(() => {
      navigate(path);
      setIsMenuOpen(false);
      setIsServicesDropdownOpen(false);
      setIsMobileServicesDropdownOpen(false);
      setIsLoading(false); // Hide loader once navigation is complete
    }, 500); // Delay to allow loader to show briefly
  };

  // Helper function to check if a path is active
  const isPathActive = (path) => {
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <div>
      {isLoading && <Loader />} {/* Show loader while navigating */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div className="cursor-pointer" initial="hidden" animate="visible" variants={logoVariants}>
              <img src={navIcon} alt="Zainab Ads" className="h-16 w-auto md:h-20 object-contain" />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex space-x-16 font-semibold"
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              {navItems.map((item) => (
                <motion.div key={item.path} className="relative text-lg" variants={itemVariants}>
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className={`flex items-center gap-1 ${
                          isPathActive("/services") ? "text-red-700 " : "text-gray-600 hover:text-red-700"
                        } transition-colors`}
                      >
                        {item.label}
                        <motion.div animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg py-2 z-50"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                          >
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <motion.button
                                key={dropdownItem.path}
                                onClick={() => handleNavigation(dropdownItem.path)}
                                className={`block w-full text-left px-4 py-2 ${
                                  isPathActive(dropdownItem.path)
                                    ? "text-red-700 bg-red-50"
                                    : "text-gray-600 hover:bg-red-50 hover:text-red-700"
                                } transition-colors`}
                                variants={itemVariants}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                  transition: { delay: index * 0.1 },
                                }}
                              >
                                {dropdownItem.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={`${
                        isPathActive(item.path) ? "text-red-700 font-semibold" : "text-gray-600 hover:text-red-700"
                      } transition-colors`}
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.95 }}>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-gray-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden mt-4 space-y-2"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
              >
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
                          className={`flex items-center justify-between w-full py-2 ${
                            isPathActive("/services") ? "text-red-700 font-semibold" : "text-gray-600"
                          }`}
                        >
                          {item.label}
                          <motion.div animate={{ rotate: isMobileServicesDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isMobileServicesDropdownOpen && (
                            <motion.div
                              className="pl-4 space-y-2 mt-2 bg-gray-50 rounded-md py-2"
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={dropdownVariants}
                            >
                              {item.dropdownItems.map((dropdownItem, index) => (
                                <motion.button
                                  key={dropdownItem.path}
                                  onClick={() => handleNavigation(dropdownItem.path)}
                                  className={`block w-full text-left py-2 ${
                                    isPathActive(dropdownItem.path) ? "text-red-700" : "text-gray-600 hover:text-red-700"
                                  }`}
                                  variants={itemVariants}
                                  custom={index}
                                >
                                  {dropdownItem.label}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.button
                        onClick={() => handleNavigation(item.path)}
                        className={`block w-full text-left font-bold py-2 ${
                          isPathActive(item.path) ? "text-red-700 font-semibold" : "text-gray-600 hover:text-red-700"
                        }`}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        {item.label}
                      </motion.button>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      {/* Hero Section with Background Image */}
      <section
        className="bg-gradient-to-r from-red-700 to-red-900 text-white bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://clinicmind.com/wp-content/uploads/2023/01/social-media-concept-with-smartphone.jpg')",
          minHeight: "700px",
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="container mx-auto px-6 text-center max-w-4xl relative z-10"
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.6 },
              }}
            >
              Welcome to Zainab Ads
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.9 },
              }}
            >
              Your Creative Partner
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Header;
