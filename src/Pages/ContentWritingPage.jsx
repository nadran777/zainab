import {
  ArrowLeft,
  Home,
  Send,
  Globe,
  CheckCircle,
  Edit,
  BookOpen,
  Newspaper,
  MessageSquare,
  ChevronUp,
  Phone,
  MessagesSquare,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "aos/dist/aos.css";
import AOS from "aos";
import contentImg from "../assets/images/contentwriting.webp";
import { FaWhatsapp } from "react-icons/fa";

function ContentWritingPage() {
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
      price: "299",
      description: "Essential content package for small businesses",
      features: [
        "4 Blog Posts Monthly",
        "Website Copy (5 Pages)",
        "Basic SEO Keywords",
        "2 Revisions per Content",
        "Content Calendar",
      ],
    },
    {
      name: "Professional",
      price: "599",
      description: "Comprehensive content solution for growing brands",
      features: [
        "8 Blog Posts Monthly",
        "Website Copy (10 Pages)",
        "Advanced SEO Optimization",
        "Social Media Content",
        "Email Newsletter Copy",
        "Unlimited Revisions",
      ],
    },
    {
      name: "Enterprise",
      price: "1299",
      description: "Complete content strategy for large organizations",
      features: [
        "12 Blog Posts Monthly",
        "Custom Website Copy",
        "Premium SEO Strategy",
        "Full Social Media Package",
        "White Papers & Case Studies",
        "Dedicated Content Manager",
      ],
    },
  ];

  const features = [
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Expert Writers",
      description: "Professional content creators in your industry",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Content that ranks and converts",
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Fresh Content",
      description: "Regular updates that engage readers",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Brand Voice",
      description: "Consistent tone and messaging",
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
              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-red-700 leading-tight">Words That Drive Results</h1>
              <p className="text-gray-600 text-xl mb-8">
                Transform your brand's story with compelling content that engages, converts, and ranks. Our expert writers deliver
                content that makes an impact.
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
              <img src={contentImg} alt="Content Writing" className="rounded-2xl shadow-2xl w-full" />
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
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-12 text-red-700 text-center">Our Content Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-red-700" />
                  <h3 className="text-2xl font-semibold text-red-700">Web Content</h3>
                </div>
                <ul className="space-y-4">
                  {["Website Copy", "Blog Posts", "Landing Pages", "Product Descriptions"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-8 h-8 text-red-700" />
                  <h3 className="text-2xl font-semibold text-red-700">Marketing Content</h3>
                </div>
                <ul className="space-y-4">
                  {["Email Campaigns", "Social Media Content", "Press Releases", "White Papers"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-700">Content Packages</h2>
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
                <span className="text-gray-500 ml-2">/month</span>
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
                Get Started
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

export default ContentWritingPage;
