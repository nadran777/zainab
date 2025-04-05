import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  ArrowLeft,
  CheckCircle,
  Home,
  Users,
  BriefcaseIcon,
  Lightbulb,
  Target,
  Zap,
  Coffee,
  Phone,
  ChevronRight,
  Medal,
  Sparkles,
} from "lucide-react";
// import Team from "../components/Team";

function AboutPage() {
  const navigate = useNavigate();
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [clientsHappy, setClientsHappy] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    const animateNumber = (target, setter, speed = 20) => {
      let current = 0;
      const interval = setInterval(() => {
        if (current < target) {
          current += 1;
          setter(current);
        } else {
          clearInterval(interval);
        }
      }, speed);
    };

    // Start animations after component mounts
    setTimeout(() => animateNumber(150, setProjectsCompleted));
    setTimeout(() => animateNumber(130, setClientsHappy));

    // Auto-cycle through features
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev === 5 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(featureInterval);
  }, []);

  const features = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Results-Focused Approach",
      description:
        "We measure success by your success. Our solutions are designed to deliver meaningful, measurable outcomes for your business.",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Creative & Innovative",
      description:
        "We bring fresh ideas and cutting-edge approaches to every project, ensuring your digital presence stands out from the crowd.",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Agile & Adaptive",
      description:
        "We move quickly and adapt to changing needs, ensuring your project stays on track and meets emerging challenges.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <BriefcaseIcon className="w-10 h-10" />,
      title: "Professional Excellence",
      description:
        "With attention to detail and commitment to quality, we deliver polished, professional results that exceed expectations.",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "Passionate & Driven",
      description: "We genuinely care about your project and bring enthusiasm and dedication to every task, big or small.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: "Always Responsive",
      description: "We pride ourselves on clear communication and quick responses, ensuring you're never left in the dark.",
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Add structured data in Helmet */}
      

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
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">About Zainabads</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center max-w-3xl mx-auto opacity-90">
            A young, passionate team turning your digital ideas into reality
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 bg-white text-red-700 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 relative inline-block">
                Who We Are
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-700"></span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2020, Zainabads is a boutique digital agency driven by passion and creativity. We're a small but mighty
                team of designers, developers, and digital enthusiasts committed to helping businesses establish a meaningful
                online presence.
                <br />
                <br />
                As a young agency, we bring fresh perspectives and innovative approaches to every project. We believe in quality
                over quantity, focusing on delivering personalized digital solutions that truly reflect our clients' unique
                visions and goals.
                <br />
                <br />
                Our journey is just beginning, and we're excited to grow alongside our clients, building lasting partnerships
                based on trust, transparency, and exceptional results.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-between">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center flex-1">
                <div className="bg-red-100 p-3 rounded-full mb-4">
                  <CheckCircle className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="text-3xl text-red-700 font-bold mb-1">{projectsCompleted}+</h3>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center flex-1">
                <div className="bg-red-100 p-3 rounded-full mb-4">
                  <Users className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="text-3xl text-red-700 font-bold mb-1">{clientsHappy}+</h3>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative inline-block">
                Our Approach
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-700"></span>
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Zainabads, we believe in a collaborative, client-centered approach. We take the time to understand your
                business, goals, and target audience before crafting solutions that make an impact.
                <br />
                <br />
                Our process is transparent, with clear communication at every step. We're not just service providers – we're
                partners in your digital journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Discovery & Research",
                  "Strategic Planning",
                  "Creative Development",
                  "Implementation",
                  "Testing & Review",
                  "Launch & Support",
                ].map((step) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-700"></div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                Our Mission
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-700"></span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To provide accessible, high-quality digital solutions that help small to medium businesses thrive in the digital
                landscape. We're committed to creating meaningful digital experiences that connect businesses with their audiences
                and drive real results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Redesigned Why Choose Us Section */}
      <div className="py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1 bg-red-100 text-red-700 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium text-sm">What Sets Us Apart</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Zainabads</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              More than just a digital agency, we're your partner in growth and innovation
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-16">
            {/* Features Selector */}
            <div className="md:w-1/3" data-aos="fade-right">
              <div className="sticky top-28 bg-white rounded-xl shadow-lg overflow-hidden">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left px-6 py-4 flex items-center gap-4 transition-all duration-300 border-l-4 ${
                      activeFeature === index
                        ? `border-l-4 border-red-600 bg-red-50 text-red-700`
                        : "border-transparent hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${
                        activeFeature === index ? features[activeFeature].color : "from-gray-200 to-gray-300"
                      } text-white`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{feature.title}</h3>
                    </div>
                    {activeFeature === index && <ChevronRight className="ml-auto w-5 h-5 text-red-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Feature Display */}
            <div className="md:w-2/3" data-aos="fade-left">
              <div
                className={`bg-gradient-to-r ${features[activeFeature].color} text-white p-8 md:p-12 rounded-2xl shadow-xl h-full flex flex-col justify-between transition-all duration-500`}
              >
                <div>
                  <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white text-opacity-90">{features[activeFeature].icon}</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{features[activeFeature].title}</h3>
                  <p className="text-lg text-white text-opacity-90 mb-8">{features[activeFeature].description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex gap-2 items-center">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeFeature === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to feature ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="mt-6 flex items-center">
                    <div className="flex items-center gap-2">
                      <Medal className="w-5 h-5 text-white text-opacity-80" />
                      <span className="text-sm text-white text-opacity-80">Excellence in every project</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
