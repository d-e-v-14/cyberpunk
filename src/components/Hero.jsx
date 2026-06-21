import heroImage from "../assets/hero_image.png";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="bg-black text-white flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-16 px-6 md:px-10 lg:pl-[100px] pt-10 md:pt-16 lg:pt-[80px]">
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Cyberpunk"
          className="w-full max-w-[320px] sm-max-w-[420px] md:max-w-[500px] lg:max-w-[620px] al:max-w-[700px] object-cover"
        />
      </div>

      <div className="max-w-[600px] p-4 md:p-8 lg:p-[50px] text-center lg:text-left">
        <h1 className="text-[30px] md:text-[45px] lg:text-[55px] leading-[1.3] font-bold mb-8 lg:mb-[50px] font-['Orbitron']">
          Your{" "}
          <span className="bg-gradient-to-r from-[#ff5e00] via-[#fda103] to-[#fb7303] bg-clip-text text-transparent font-['Orbitron']">
            Portal to a Gritty,
          </span>
          {" "}Tech-Driven Future
        </h1>

        <p className="text-[15px] leading-8 text-gray-300 mb-5 font-sans">
          A realm where advanced technology meets dystopian reality.
          Our website is your gateway to a universe of neon lights,
          gritty streets, and cybernetic enhancements.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center lg:justify-start">

          <button className="px-5 py-2 rounded-lg text-white text-[18px] bg-gradient-to-r from-[#f8961e] via-[#ff6b00] to-[#f94144] hover:-translate-y-[2px] transition-all duration-300">
            Read More
          </button>

          <div className="inline-block p-[1.5px] bg-[linear-gradient(90deg,#ff4d00_0%,#ff7b00_45%,#ffd60a_100%)] hover:-translate-y-[2px] hover:scale-105 transition-all duration-300">
            <button className="bg-black px-5 py-2 text-[#ff8c00] text-[18px] hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;