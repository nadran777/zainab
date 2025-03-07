import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import WebDevelopmentPage from "./Pages/WebDevelopmentPage";
import GraphicDesignPage from "./Pages/GraphicDesignPage";
import ContentWritingPage from "./Pages/ContentWritingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Our-Works" element={<PortfolioPage />} /> */}
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/services/content-writing" element={<ContentWritingPage />} />
      </Routes>
      <footer className="bg-gray-800 text-white py-5 text-center">
        <div className="container mx-auto px-4">
          <p className="m-0 text-sm md:text-base lg:text-lg">&copy; 2025 Zainab Ads. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
