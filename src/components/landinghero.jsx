import heroImage from "../assets/main.png";
import sideImage from "../assets/side.png";

export default function LandingHero() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden font-sans">

            {/* ── Corner decorations ── */}
            {/* Top-left corner bracket */}
            <div className="absolute top-4 left-4 w-10 h-10 pointer-events-none z-30">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M2 20 L2 2 L20 2" stroke="#e85d04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="2" cy="2" r="2" fill="#e85d04" />
                </svg>
            </div>
            {/* Top-right corner bracket */}
            <div className="absolute top-4 right-4 w-10 h-10 pointer-events-none z-30">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M38 20 L38 2 L20 2" stroke="#e85d04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="38" cy="2" r="2" fill="#e85d04" />
                </svg>
            </div>
            {/* Bottom-left corner bracket */}
            <div className="absolute bottom-4 left-4 w-10 h-10 pointer-events-none z-30">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M2 20 L2 38 L20 38" stroke="#e85d04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="2" cy="38" r="2" fill="#e85d04" />
                </svg>
            </div>
            {/* Bottom-right corner bracket */}
            <div className="absolute bottom-4 right-4 w-10 h-10 pointer-events-none z-30">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M38 20 L38 38 L20 38" stroke="#e85d04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="38" cy="38" r="2" fill="#e85d04" />
                </svg>
            </div>

            {/* ── Outer border frame ── */}
            <div
                className="absolute inset-3 pointer-events-none z-20"
                style={{ border: "1px solid rgba(59,130,246,0.18)" }}
            />

            {/* ── NAVIGATION ── */}
            <nav className="relative z-40 flex items-center justify-between px-10 py-5">
                {/* Logo */}
                <div
                    className="text-xl font-bold tracking-wide"
                    style={{ color: "#e85d04", fontFamily: "'Segoe UI', system-ui, sans-serif", letterSpacing: "0.04em" }}
                >
                    Cyber. <span style={{ color: "#e85d04" }}>Game</span>
                </div>

                {/* Nav links */}
                <div className="hidden md:flex items-center gap-10">
                    {["Home", "Pages", "Support", "Contact"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-sm font-medium transition-colors duration-200"
                            style={{ color: "#d1d5db", letterSpacing: "0.01em" }}
                            onMouseEnter={(e) => (e.target.style.color = "#e85d04")}
                            onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* CTA button */}
                <button
                    className="text-white text-sm font-semibold px-5 py-2.5 rounded transition-all duration-300 hover:-translate-y-1"
                    style={{
                        background: "#e85d04",
                        letterSpacing: "0.03em",
                        boxShadow: "0 0 0 transparent",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 6px 24px rgba(232,93,4,0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 0 0 transparent";
                    }}
                >
                    Get started free
                </button>
            </nav>

            {/* ── HERO SECTION ── */}
            <div className="relative z-10 flex flex-col items-center" style={{ minHeight: "calc(100vh - 80px)" }}>

                {/* ── LARGE TITLE ── */}
                <div className="relative w-full flex justify-center mt-2 mb-0 select-none pointer-events-none">
                    <h1
                        className="text-center font-black leading-none tracking-tight"
                        style={{
                            fontSize: "clamp(5rem, 13vw, 13rem)",
                            color: "#ffffff",
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 900,
                            letterSpacing: "-0.01em",
                            lineHeight: 0.92,
                            textShadow: "0 2px 40px rgba(255,255,255,0.08)",
                        }}
                    >
                        Cyber Punk
                    </h1>
                </div>

                {/* ── THREE-COLUMN MIDDLE SECTION ── */}
                <div className="relative w-full flex items-start justify-between px-10 -mt-16 md:-mt-24 lg:-mt-32">

                    {/* LEFT: Stories & Lore */}
                    <div className="hidden md:flex flex-col justify-center pt-32 max-w-xs z-20" style={{ minWidth: 200 }}>
                        {/* Dot + label */}
                        <div className="flex items-center gap-2 mb-3">
                            <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ background: "#e85d04" }}
                            />
                            <span
                                className="text-white text-base font-semibold"
                                style={{ letterSpacing: "0.01em" }}
                            >
                                Stories & Lore
                            </span>
                        </div>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#9ca3af", maxWidth: 180, lineHeight: 1.6 }}
                        >
                            Dive into compelling narratives set in a dystopian future.
                        </p>

                        {/* Decorative connector line */}
                        <div className="mt-6 flex items-center gap-0">
                            <div
                                className="h-px flex-1"
                                style={{ background: "linear-gradient(90deg, transparent, #e85d04 60%, #e85d04)", width: 80 }}
                            />
                            <div
                                className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                                style={{ borderColor: "#e85d04", background: "transparent" }}
                            />
                        </div>
                        {/* Yellow circle accent below */}
                        <div
                            className="mt-8 w-10 h-10 rounded-full flex-shrink-0"
                            style={{
                                background: "radial-gradient(circle, #f5c518 0%, #e85d04 60%, transparent 100%)",
                                boxShadow: "0 0 18px 4px rgba(245,197,24,0.45)",
                                marginLeft: 70,
                            }}
                        />
                    </div>

                    {/* CENTER: Hero Image */}
                    <div
                        className="relative flex-1 flex justify-center items-end z-10"
                        style={{ minHeight: 420 }}
                    >
                        <img
                            src={heroImage}
                            alt="Cyberpunk character"
                            className="relative z-10 object-contain"
                            style={{
                                height: "clamp(340px, 52vw, 580px)",
                                maxWidth: "100%",
                                filter: "drop-shadow(0 0 60px rgba(0,0,0,0.9))",
                            }}
                        />
                    </div>

                    {/* RIGHT: Events and Updates */}
                    <div
                        className="hidden md:flex flex-col items-end justify-center pt-28 max-w-xs z-20 text-right"
                        style={{ minWidth: 220 }}
                    >
                        <p
                            className="text-xs font-semibold tracking-widest mb-1"
                            style={{ color: "#9ca3af", letterSpacing: "0.18em" }}
                        >
                            EVENTS AND
                        </p>
                        <h3
                            className="text-2xl font-black mb-4"
                            style={{
                                color: "#ffffff",
                                fontFamily: "'Arial Black', system-ui, sans-serif",
                                fontWeight: 900,
                                letterSpacing: "0.04em",
                                lineHeight: 1.1,
                            }}
                        >
                            UPDATES
                        </h3>
                        <p
                            className="text-sm leading-relaxed mb-6 text-right"
                            style={{ color: "#9ca3af", maxWidth: 210, lineHeight: 1.65 }}
                        >
                            Explore the high-tech, low-life world where the lines between humanity and machinery blur.
                        </p>
                        <button
                            className="text-white text-sm font-semibold px-6 py-2.5 rounded transition-all duration-300 hover:-translate-y-1"
                            style={{ background: "#e85d04" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(232,93,4,0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            Read More
                        </button>
                    </div>
                </div>

                {/* ── BOTTOM CARDS ROW ── */}
                <div className="relative z-20 w-full flex flex-col md:flex-row items-stretch justify-between gap-4 px-10 pb-10 mt-4">

                    {/* CARD 1: 76,285K+ with side image */}
                    <div
                        className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1"
                        style={{
                            background: "rgba(20,20,20,0.85)",
                            border: "1px solid rgba(232,93,4,0.35)",
                            backdropFilter: "blur(8px)",
                            flex: "0 0 auto",
                            width: "clamp(280px, 32%, 370px)",
                        }}
                    >
                        {/* Side image */}
                        <div className="flex-shrink-0 rounded-lg overflow-hidden" style={{ width: 90, height: 115 }}>
                            <img
                                src={sideImage}
                                alt="Cyberpunk warrior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p
                                className="text-3xl font-black mb-1"
                                style={{
                                    color: "#e85d04",
                                    fontFamily: "'Arial Black', system-ui, sans-serif",
                                    fontWeight: 900,
                                    lineHeight: 1,
                                }}
                            >
                                76,285K+
                            </p>
                            <p
                                className="text-base font-bold text-white mb-2"
                                style={{ letterSpacing: "0.01em" }}
                            >
                                Experience the Future
                            </p>
                            <p
                                className="text-xs leading-relaxed"
                                style={{ color: "#9ca3af", maxWidth: 180, lineHeight: 1.55 }}
                            >
                                Explore the high-tech, low-life world where the lines between
                            </p>
                        </div>
                    </div>

                    {/* CARD 2: Art and Design */}
                    <div
                        className="flex flex-col justify-center px-6 py-4"
                        style={{ flex: "1 1 0%", maxWidth: 260 }}
                    >
                        <p
                            className="text-base font-semibold tracking-wide mb-0.5"
                            style={{ color: "#ffffff", letterSpacing: "0.04em" }}
                        >
                            ART AND
                        </p>
                        <p
                            className="text-2xl font-black mb-3"
                            style={{
                                color: "#ffffff",
                                fontFamily: "'Arial Black', system-ui, sans-serif",
                                fontWeight: 900,
                                letterSpacing: "0.04em",
                            }}
                        >
                            DESIGN
                        </p>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#9ca3af", lineHeight: 1.65 }}
                        >
                            Feast your eyes on stunning visuals and concept art that bring the cyberpunk
                        </p>
                    </div>

                    {/* CARD 3: 17+ Years */}
                    <div
                        className="flex flex-col items-center justify-center rounded-xl px-8 py-6 transition-all duration-300 hover:-translate-y-1"
                        style={{
                            background: "rgba(28,18,12,0.9)",
                            border: "1px solid rgba(232,93,4,0.3)",
                            backdropFilter: "blur(8px)",
                            flex: "0 0 auto",
                            minWidth: 180,
                        }}
                    >
                        <p
                            className="text-5xl font-black mb-1"
                            style={{
                                color: "#e85d04",
                                fontFamily: "'Arial Black', system-ui, sans-serif",
                                fontWeight: 900,
                                lineHeight: 1,
                            }}
                        >
                            17+
                        </p>
                        <p
                            className="text-base font-semibold text-white text-center"
                            style={{ lineHeight: 1.4 }}
                        >
                            Years of<br />Experiences
                        </p>
                    </div>
                </div>
            </div>

            {/* ── SUBTLE VERTICAL SIDE ACCENT LINES ── */}
            <div
                className="absolute top-0 left-12 bottom-0 pointer-events-none z-0"
                style={{ width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.12) 30%, rgba(59,130,246,0.12) 70%, transparent 100%)" }}
            />
            <div
                className="absolute top-0 right-12 bottom-0 pointer-events-none z-0"
                style={{ width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.12) 30%, rgba(59,130,246,0.12) 70%, transparent 100%)" }}
            />

            {/* ── HERO GLOW (subtle radial behind character) ── */}
            <div
                className="absolute pointer-events-none z-0"
                style={{
                    top: "8%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "55%",
                    height: "70%",
                    background: "radial-gradient(ellipse at center, rgba(30,30,60,0.45) 0%, transparent 75%)",
                    borderRadius: "50%",
                }}
            />
        </div>
    );
}