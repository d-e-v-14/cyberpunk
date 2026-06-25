
import unveilCharacter from '../assets/unveil-character.png';
import unveilCardIcon from '../assets/unveil-card-icon.png';

export default function UnveilSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-5 sm:p-8 md:p-12 lg:p-16 bg-transparent relative overflow-hidden min-h-[450px]">
      {/* Left — large character image */}
      <div className="w-full md:w-2/5 lg:w-5/12 flex-none flex justify-center md:justify-start mb-8 md:mb-0">
        <img src={unveilCharacter} alt="Cyberpunk Character" className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] h-auto object-contain mix-blend-lighten" />
      </div>

      {/* Right — text content */}
      <div className="flex-none w-full sm:max-w-md md:w-1/2 lg:w-5/12 md:ml-auto z-10">
        <h2 className="font-exo text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.18] text-white mb-3 sm:mb-4 tracking-tight">
          Unveil <span className="text-gradient-neon">the Secrets<br />of the</span> Cybernetic<br />
          Underworld
        </h2>
        <p className="font-rajdhani text-sm sm:text-base md:text-lg text-[#b8b8b8] leading-relaxed mb-6 sm:mb-8 max-w-sm font-normal">
          A realm where advanced technology meets dystopian reality. Our website
          is your gateway to a universe of neon lights, gritty streets,
          and cybernetic enhancements.
        </p>
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:max-w-sm p-3 sm:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-md cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#ff500012] before:to-transparent before:pointer-events-none hover:bg-white/10 transition-colors">
          <img src={unveilCardIcon} alt="Join the Revolution" className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-sm object-cover" />
          <div className="z-10">
            <div className="font-exo text-sm md:text-base font-bold text-white mb-1">Join the Revolution</div>
            <div className="font-rajdhani text-xs md:text-sm text-[#b3b3b3] leading-relaxed font-normal">
              Explore the high-tech, low-life world where the lines between
              humanity and machinery blur.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
