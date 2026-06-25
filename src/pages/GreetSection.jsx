

export default function GreetSection() {
  return (
    <section className="flex flex-col md:flex-row items-center p-5 sm:p-8 md:p-12 lg:p-16 bg-transparent gap-6 sm:gap-8 md:gap-14 relative overflow-hidden">
      <div className="flex-1 w-full">
        <h2 className="font-exo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] text-white mb-4 sm:mb-6 tracking-tight">
          Greetings! Dive<br />
          into the Cybernetic<br />Universe
        </h2>
        <p className="font-rajdhani text-sm sm:text-base md:text-lg text-[#afadad] leading-relaxed max-w-sm font-normal">
          Our website is your gateway to a universe of neon lights, gritty streets, and
          cybernetic enhancements. Explore the high-tech, low-life world where the lines
          between humanity and machinery blur.
        </p>
      </div>
      <div className="flex-none w-full sm:max-w-md md:w-1/3 lg:w-1/4 mt-4 sm:mt-0">
        <div className="bg-white/5 backdrop-blur-md border border-[#ff6400]/30 rounded-lg py-5 sm:py-6 px-4 flex flex-col gap-2">
          {["Join The Revolution", "Art And Design", "Tech And Gear", "Stories And Lore"].map((item, i) => (
            <div className="flex items-center gap-3 sm:gap-4 py-2 sm:py-2.5 px-3 sm:px-3.5 cursor-pointer hover:bg-white/5 transition-colors rounded-md" key={i}>
              <div className={`w-2 h-2 flex-shrink-0 ${i % 2 === 0 ? "bg-neon-yellow" : "bg-[#dd1100]"}`} />
              <span className="font-exo text-sm md:text-base font-bold text-white flex-1 tracking-wide">{item}</span>
              <span className="text-white text-base md:text-lg font-normal">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
