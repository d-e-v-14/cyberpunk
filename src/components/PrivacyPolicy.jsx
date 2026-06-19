import { useState } from "react";
import Footer from "./Footer";

function PrivacyPolicy() {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <section className="bg-[radial-gradient(circle_at_top,#111,#000)] text-white min-h-screen">

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-20">

        {/* HEADER */}
        <div className="text-center mb-24">

          <p className="text-orange-400 tracking-[4px] uppercase mb-6">
            Privacy & Security
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-['Orbitron']">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Updated June 2026
          </p>

          <p className="max-w-[850px] mx-auto text-gray-300 leading-9 text-[17px]">
            Cyber.AI is committed to protecting your personal
            information and maintaining transparency regarding
            how data is collected, processed, secured, and used
            across our futuristic digital ecosystem.
          </p>

        </div>

        {/* SECTION 1 */}
        <div className="border-b border-orange-500/20 py-8">

          <button
            onClick={() => toggleSection(1)}
            className="w-full flex justify-between items-center"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-left">
              Information We Collect
            </h2>

            <span className="text-5xl text-orange-400">
              {openSection === 1 ? "−" : "+"}
            </span>
          </button>

          {openSection === 1 && (
            <div className="mt-8 text-gray-300 leading-9 text-[16px]">

              <p className="mb-6">
                Cyber.AI may collect personal information such as
                usernames, email addresses, device identifiers,
                browser information, IP addresses, and analytics
                data to improve functionality and maintain security.
              </p>

              <p>
                Additional information may be collected through
                cookies, tracking technologies, and interactions
                within our platform to personalize user experiences
                and optimize performance across devices.
              </p>

            </div>
          )}

        </div>

        {/* SECTION 2 */}
        <div className="border-b border-orange-500/20 py-8">

          <button
            onClick={() => toggleSection(2)}
            className="w-full flex justify-between items-center"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-left">
              How We Use Your Data
            </h2>

            <span className="text-5xl text-orange-400">
              {openSection === 2 ? "−" : "+"}
            </span>
          </button>

          {openSection === 2 && (
            <div className="mt-8 text-gray-300 leading-9 text-[16px]">

              <p className="mb-6">
                Your information is used to enhance platform
                functionality, improve security systems,
                personalize content, analyze engagement,
                and optimize the performance of Cyber.AI services.
              </p>

              <p>
                We may also use aggregated analytics to understand
                usage patterns, improve user experiences,
                and maintain the reliability of our systems.
              </p>

            </div>
          )}

        </div>

        {/* SECTION 3 */}
        <div className="border-b border-orange-500/20 py-8">

          <button
            onClick={() => toggleSection(3)}
            className="w-full flex justify-between items-center"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-left">
              Cookies & Tracking Technologies
            </h2>

            <span className="text-5xl text-orange-400">
              {openSection === 3 ? "−" : "+"}
            </span>
          </button>

          {openSection === 3 && (
            <div className="mt-8 text-gray-300 leading-9 text-[16px]">

              <p className="mb-6">
                Cyber.AI uses cookies and related technologies
                to remember preferences, analyze traffic,
                enhance security, and provide personalized
                digital experiences across the platform.
              </p>

              <p>
                Users may manage or disable cookies through
                browser settings; however, certain features
                of the platform may not function properly
                without them enabled.
              </p>

            </div>
          )}

        </div>

        {/* SECTION 4 */}
        <div className="border-b border-orange-500/20 py-8">

          <button
            onClick={() => toggleSection(4)}
            className="w-full flex justify-between items-center"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-left">
              Data Security & Protection
            </h2>

            <span className="text-5xl text-orange-400">
              {openSection === 4 ? "−" : "+"}
            </span>
          </button>

          {openSection === 4 && (
            <div className="mt-8 text-gray-300 leading-9 text-[16px]">

              <p className="mb-6">
                We implement advanced encryption systems,
                monitoring technologies, and secure storage
                protocols to protect personal information
                from unauthorized access or misuse.
              </p>

              <p>
                Our cybersecurity infrastructure is continuously
                updated to maintain protection against evolving
                digital threats and vulnerabilities.
              </p>

            </div>
          )}

        </div>

        {/* SECTION 5 */}
        <div className="border-b border-orange-500/20 py-8">

          <button
            onClick={() => toggleSection(5)}
            className="w-full flex justify-between items-center"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-left">
              User Privacy Rights
            </h2>

            <span className="text-5xl text-orange-400">
              {openSection === 5 ? "−" : "+"}
            </span>
          </button>

          {openSection === 5 && (
            <div className="mt-8 text-gray-300 leading-9 text-[16px]">

              <p className="mb-6">
                Users have the right to request access,
                correction, or deletion of personal data
                collected through the Cyber.AI platform.
              </p>

              <p>
                Requests related to privacy rights,
                account information, or data processing
                may be submitted through our official
                support channels.
              </p>

            </div>
          )}

        </div>

      </div>

      <Footer/>

    </section>
  );
}

export default PrivacyPolicy;