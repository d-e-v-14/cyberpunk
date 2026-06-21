 devatman
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Cyberpunk Sections
import HeroSection from "./pages/HeroSection";
import GreetSection from "./pages/GreetSection";
import UnveilSection from "./pages/UnveilSection";
import DiveSection from "./pages/DiveSection";
import BlogSection from "./pages/BlogSection";

function Home() {
  const [showCookies, setShowCookies] = useState(false);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <HeroSection />
      <GreetSection />
      <UnveilSection />
      <DiveSection />
      <BlogSection />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white p-6">
      <div className="max-w-2xl w-full bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur">
        <h1 className="text-3xl font-extrabold mb-4 text-gradient-neon">Privacy Policy</h1>
        <p className="text-[#bababa]">Your privacy policy content will go here.</p>
      </div>
    </div>

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useState } from "react";

import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import PrivacyPolicy from "./components/PrivacyPolicy";

function Home() {

  const [showCookies, setShowCookies] = useState(false);

  return (
    <>
      <Hero />

      <FAQ />

      <Footer setShowCookies={setShowCookies} />

      <Cookies
        show={showCookies}
        setShow={setShowCookies}
      />
    </>
 main
  );
}

function App() {
  return (
    <BrowserRouter>
 devatman
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>


      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/privacy"
          element={<PrivacyPolicy />}
        />

      </Routes>

 main
    </BrowserRouter>
  );
}

export default App;