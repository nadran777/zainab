import React, { useEffect, useState } from "react";
import { Mail, Phone, Send, User, MessageSquare, ArrowLeft, Home } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router";
import indflag from "../assets/flag/in.svg";
import uaeflag from "../assets/flag/ae.svg";
import "aos/dist/aos.css";
import AOS from "aos";
// import { Helmet } from "react-helmet"; // Import Helmet for structured data

function ContactPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .send("service_vd7lvy5", "template_gwbmsws", formData, "HX77zPekhTCYPMuzv")
      .then((response) => {
        console.log("Success:", response);
        setIsLoading(false);
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Add structured data in Helmet */}
     

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

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-red-700 text-white p-6">
                <h3 className="text-2xl font-semibold">Contact Information</h3>
                <p className="text-red-100 mt-2">Reach out to us through any of these channels</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 p-4 bg-red-100 rounded-xl group-hover:bg-red-200 transition-colors">
                    <Mail className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <a
                      href="mailto:connectzainabads@gmail.com"
                      target="_blank"
                      className="text text-decoration-none hover-primary"
                    >
                      connectzainabads@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 p-4 bg-red-100 rounded-xl group-hover:bg-red-200 transition-colors">
                    <Phone className="w-6 h-6 text-red-700" />
                  </div>
                  <div className="flex flex-col">
                    <a href="tel:+917561010031" target="_blank" className="text text-decoration-none hover-primary">
                      +917561010031 <img src={indflag} alt="IND" className="inline-block w-5 h-5 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 p-4 bg-red-100 rounded-xl group-hover:bg-red-200 transition-colors">
                    <Phone className="w-6 h-6 text-red-700" />
                  </div>
                  <div className="flex flex-col">
                    <a href="tel:+9710545163760" target="_blank" className="text text-decoration-none hover-primary">
                      +9710545163760 <img src={uaeflag} alt="UAE" className="inline-block w-5 h-5 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/7561010031"
                      target="_blank"
                      className="group p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300"
                    >
                      <FaWhatsapp className="w-6 h-6 text-red-700 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://www.facebook.com/zainabads"
                      target="_blank"
                      className="group p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300"
                    >
                      <FaFacebook className="w-6 h-6 text-red-700 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://www.instagram.com/zainabads"
                      target="_blank"
                      className="group p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300"
                    >
                      <FaInstagram className="w-6 h-6 text-red-700 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/zainab-ads"
                      target="_blank"
                      className="group p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300"
                    >
                      <FaLinkedin className="w-6 h-6 text-red-700 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-right">
            <div className="bg-red-700 text-white p-6">
              <h3 className="text-2xl font-semibold">Send us a Message</h3>
              <p className="text-red-100 mt-2">Fill out the form below and we'll get back to you shortly</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <User className="w-4 h-4" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {isSuccess && (
                <p className="text-center text-green-600">Thank you for your message! We will get back to you shortly.</p>
              )}
              {isError && <p className="text-center text-red-600">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
