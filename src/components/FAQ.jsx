import "../styles/faq.css";

function FAQ() {
  return(
    <section className="bg-black text-white font-['Orbitron'] px-5 sm:px-10 lg:px-20 py-16 lg:py-24">
      <h2 className="text-center font-bold  text-[38px] md:[40px] lg:text-[45px] leading-tight mb-8">Frequently Asked <br/><span class="bg-[linear-gradient(to_right,#ff5e00,#fda103,#ff6a00,#ff7303)] bg-clip-text text-transparent" >Questions</span></h2>

      <p className="text-center text-gray-300 font-sans  max-w-[800px] mx-auto leading-8 text-[14px] sm:text-[16px] mb-16">
        A realm where advanced technology meets dystopian reality.
        Our website is your gateway to a universe of neon lights,
        gritty streets, and cybernetic enhancements.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-x-35">
        <div className="border-b-2 border-[#ff6b00] pb-6">

          <div className="flex gap-4 items-start mb-6">
            <span className="bg-[linear-gradient(to_right,#ff5e00,#fda103,#ff6a00,#ff7303)] bg-clip-text text-transparent text-[25px] sm:text-[40px]">01.</span>
            <h3 className="text-[20px] sm:text-[18px] leading-tight pt-3 font-bold">
              How do i stay updated on new content and events?
            </h3>
          </div>

          <p className="text-gray-300 font-sans leading-7 pl-17">
            A realm where advanced technology meets dystopian reality.
            Our website is your gateway.....
          </p>
        </div>


        <div className="border-b-2 border-[#ff6b00] pb-6">

          <div className="flex gap-4 items-start mb-6">
          <span className="bg-[linear-gradient(to_right,#ff5e00,#fda103,#ff6a00,#ff7303)] bg-clip-text text-transparent text-[25px] sm:text-[40px]">02.</span>
          <h3 className="text-[20px] sm:text-[18px] leading-tight pt-3 font-bold">
            How can i contact customer cyberpunk support?
          </h3>
          </div>

          <p className="text-gray-300 font-sans leading-7 pl-22">
            A realm where advanced technology meets dystopian reality.
            Our website is your gateway.....
          </p>
        </div>


        <div className="border-b-2 border-[#ff6b00] pb-6">

          <div className="flex gap-4 items-start mb-6">
            <span className="bg-[linear-gradient(to_right,#ff5e00,#fda103,#ff6a00,#ff7303)] bg-clip-text text-transparent text-[25px] sm:text-[40px]">03.</span>
            <h3 className="text-[20px] sm:text-[18px] leading-tight pt-3 font-bold">
              Can i purchase cyberpunk-themed merchandise?
            </h3>
          </div>

          <p className="text-gray-300 font-sans leading-7 pl-17">
            A realm where advanced technology meets dystopian reality.
            Our website is your gateway.....
          </p>
        </div>


        <div className="border-b-2 border-[#ff6b00] pb-6">
          
          <div className="flex gap-4 items-start mb-6">
            <span className="bg-[linear-gradient(to_right,#ff5e00,#fda103,#ff6a00,#ff7303)] bg-clip-text text-transparent text-[25px] sm:text-[40px]">04.</span>
            <h3 className="text-[20px] sm:text-[18px] leading-tight pt-3 font-bold">
              Are there any rules or guidelines for participating in the community?
            </h3>
          </div>

          <p className="text-gray-300 font-sans leading-7 pl-22">
            A realm where advanced technology meets dystopian reality.
            Our website is your gateway.....
          </p>
        </div>

      </div>

    </section>

  );
}
export default FAQ;