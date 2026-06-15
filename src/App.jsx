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
  );
}

function App() {
  return (
    <BrowserRouter>

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

    </BrowserRouter>
  );
}

export default App;