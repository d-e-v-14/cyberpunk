function Cookies({ show, setShow }) {

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#0a0a0a] border border-orange-500/40 rounded-xl p-8 w-[90%] max-w-[600px] shadow-[0_0_30px_rgba(255,140,0,0.2)]">

        {}
        <h2 className="text-white text-[28px] font-bold mb-4 font-['Orbitron']">
          Cookie Preferences
        </h2>

        {}
        <p className="text-gray-300 leading-8 mb-8">
          We use cookies to enhance your cyber experience,
          analyze traffic, and personalize content.
        </p>

        {}
        <div className="flex gap-4">

          {}
          <button
            onClick={() => setShow(false)}
            className="px-6 py-3 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Close
          </button>

          {}
          <button
            onClick={() => setShow(false)}
            className="px-6 py-3 text-white bg-[linear-gradient(to_right,#ff5e00,#ff8c00,#ffd60a)] hover:scale-105 transition-all duration-300"
          >
            Accept
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cookies;