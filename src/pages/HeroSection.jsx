import React from 'react';
import heroImg from '../assets/hero.png';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-5 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden min-h-[500px]">
      <div className="flex-1 md:pr-8 z-10">
        <h1 className="font-exo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4 sm:mb-6 tracking-tight">
          Where <span className="text-gradient-neon">Neon Dreams<br />&amp; Digital Nightmares</span><br />
          Converge.
        </h1>
        <p className="font-rajdhani text-sm sm:text-base md:text-lg text-[#bababa] leading-relaxed max-w-md mb-8 sm:mb-10 font-normal">
          A realm where advanced technology meets dystopian reality. Our website
          is your gateway to a universe of neon lights, gritty streets, and cybernetic
          enhancements. Explore the high-tech, low-life world where the lines
          between humanity and machinery blur.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-10">
          <div>
            <span className="font-exo text-xl sm:text-2xl font-extrabold block text-gradient-neon">89,2K+</span>
            <span className="font-rajdhani text-xs md:text-sm text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Discover the Future</span>
          </div>
          <div>
            <span className="font-exo text-xl sm:text-2xl font-extrabold block text-gradient-neon">7001+</span>
            <span className="font-rajdhani text-xs md:text-sm text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Stories and Lore</span>
          </div>
          <div>
            <span className="font-exo text-xl sm:text-2xl font-extrabold block text-gradient-neon">3,124+</span>
            <span className="font-rajdhani text-xs md:text-sm text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Art and Design</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-5/12 flex-none mt-8 sm:mt-10 md:mt-0 flex justify-center md:justify-end md:absolute md:right-0 md:bottom-0">
        <img src={heroImg} alt="Cyberpunk Character" className="w-full max-w-sm md:max-w-none md:w-[120%] lg:w-[130%] h-auto object-contain mix-blend-lighten md:-translate-x-4 lg:translate-x-8" />
      </div>
    </section>
  );
}
