import { ArrowLeft, ChevronUp, Home, MessagesSquare, Phone, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router";

function PortfolioPage() {
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };

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
  return (
    <div className="pt-20">
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
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-red-700">Our Portfolio</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-200 h-64 rounded-lg hover:shadow-lg transition-shadow"></div>
          ))}
        </div>
      </div>
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

export default PortfolioPage;
