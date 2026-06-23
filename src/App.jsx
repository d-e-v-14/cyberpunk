import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeroSection from "./pages/HeroSection";
import GreetSection from "./pages/GreetSection";
import UnveilSection from "./pages/UnveilSection";
import DiveSection from "./pages/DiveSection";
import BlogSection from "./pages/BlogSection";

function Home() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <HeroSection />
      <GreetSection />
      <UnveilSection />
      <DiveSection />
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
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;